// game.test.js
// @author octopoulo <polluxyz@gmail.com>
// @version 2020-04-21
//
/*
globals
__dirname, expect, require, test
*/
'use strict';

let {create_module} = require('./create-module');

let IMPORT_PATH = __dirname.replace(/\\/g, '/'),
    OUTPUT_MODULE = `${IMPORT_PATH}/test/game+`;

create_module(IMPORT_PATH, [
    'common',
    'engine',
    'xboard',
    'game',
], OUTPUT_MODULE);

let {
        calculate_probability, calculate_score, create_field_value, get_short_name,
    } = require(OUTPUT_MODULE);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// calculate_probability
[
    ['Stockfish', 0.27, '7.8% W | 92.2% D'],
    ['LCZero', 0.27, '9.2% W | 90.8% D'],
    // ['LCZeroCPU', 0.27, '9.2% W | 90.8% D'],
    ['AllieStein', 0.27, '6.0% W | 94.0% D'],
]
 .forEach(([short_engine, eval_, answer], id) => {
    test(`calculate_probability:${id}`, () => {
        expect(calculate_probability(short_engine, eval_)).toEqual(answer);
    });
});

// calculate_score
[
    ['0', {w: 0, b: 1}],
    ['01', {w: 1, b: 1}],
    ['011===', {w: 3.5, b: 2.5}],
    ['011===11111', {w: 8.5, b: 2.5}],
].forEach(([text, answer], id) => {
    test(`calculate_score:${id}`, () => {
        expect(calculate_score(text)).toEqual(answer);
    });
});

// create_field_value
[
    ['G#', ['g', 'G#']],
    ['wev=Ev', ['wev', 'Ev']],
    ['White', ['white', 'White']],
    ['Final decision', ['final_decision', 'Final decision']],
    ['W.ev', ['w_ev', 'W.ev']],
    ['Wins [W/B]', ['wins', 'Wins [W/B]']],
    ['Diff [Live]', ['diff', 'Diff [Live]']],
    ['a_b=A=B', ['a_b', 'A=B']],
    ['startTime', ['start_time', 'startTime']],
    ['BlackEv', ['black_ev', 'BlackEv']],
    ['# Games', ['games', '# Games']],
].forEach(([text, answer], id) => {
    test(`create_field_value:${id}`, () => {
        expect(create_field_value(text)).toEqual(answer);
    });
});

// get_short_name
[
    ['LCZero v0.24-sv-t60-3010', 'LCZero'],
    ['Stockfish 20200407DC', 'Stockfish'],
    ['SuperBaronizer', 'Baron'],
].forEach(([text, answer], id) => {
    test(`get_short_name:${id}`, () => {
        expect(get_short_name(text)).toEqual(answer);
    });
});
