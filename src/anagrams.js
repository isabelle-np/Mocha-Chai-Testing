import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (str1, str2) => {
    const str1Count = getLetterCount(str1);
    const str2Count = getLetterCount(str2);

    return (isEqual(str1Count, str2Count));
};

