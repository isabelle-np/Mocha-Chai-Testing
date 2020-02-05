export const getLetterCount = string => {
    const letters = string.toLowerCase().split('');
    let letterCount = {};

    letters.forEach(letter => {
        if (letterCount[letter]) {
            letterCount[letter] += 1;
        } else if (letter !== ' ') {
            letterCount[letter] = 1; 
        }
    });

    return letterCount;
};
