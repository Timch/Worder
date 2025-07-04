import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { checkWord } from './index.js';

describe('checkWord()', () => {
    it('should return true when word matches pattern and there are no other constraints', () => {
        const result = checkWord('right', /righ([a-z])/, [], []);
        assert.strictEqual(result, true);
    });

    it('should return false when word does not match the pattern', () => {
        const result = checkWord('wrong', /righ([a-z])/, [], []);
        assert.strictEqual(result, false);
    });

    it('should return false when word contains a gray letter', () => {
        const result = checkWord('wrong', /w([a-z])ong/, ['r'], []);
        assert.strictEqual(result, false);
    });

    it('should return true when all yellow letters are present in the captured parts of the word', () => {
        const result = checkWord('arise', /a([a-z])i([a-z])e/, [], ['r', 's']);
        assert.strictEqual(result, true);
    });

    it('should return false when not all yellow letters are present in the captured parts of the word', () => {
        const result = checkWord('arise', /a([a-z])i([a-z])e/, [], ['r', 't']);
        assert.strictEqual(result, false);
    });

    it('should return false when multiple copies of the same yellow letter are used', () => {
        const result = checkWord('wrong', /w([a-z])ong/, [], ['r', 'r']);
        assert.strictEqual(result, false);
    });
});