import { checkWord } from './index.js';

test('checks a word using the search pattern', () => {
    const result = checkWord('right', /righ([a-z])/, [], []);
    expect(result).toBe(true);
});

test('checks a word against the gray letters', () => {
    const result = checkWord('wrong', /.*/, ['w'], []);
    expect(result).toBe(false);
});