import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
    it('returns true if both strings are empty', () => {
        const expected = true;
        const actual = isAnagram('','');

        expect(actual).to.equal(expected);
    }),

    it('returns true if both strings have no spaces and are anagrams', () => {
        const expected = true;
        const actual = isAnagram('silent','listen');

        expect(actual).to.equal(expected);
    }),

    it('returns true if both strings have no spaces and are anagrams and ignores cases', () => {
        const expected = true;
        const actual = isAnagram('SILent','listen');

        expect(actual).to.equal(expected);
    }),

    it('returns true if strings contain extra spaces', () => {
        const expected = true;
        const actual = isAnagram('conversation','voices rant on');

        expect(actual).to.equal(expected);
    })
});
