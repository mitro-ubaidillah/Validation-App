export const nricValidation = (nricInput) => {
    const nricRegex = /(\D)(\d{7})(\D)/;
    const nricTypeRegex = /S|T|F|G/;
    const weightArr = [2, 7, 6, 5, 4, 3, 2];
    const nricLetterST = ['J', 'Z', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];
    const nricLetterFG = ['X', 'W', 'U', 'T', 'R', 'Q', 'P', 'N', 'M', 'L', 'K'];

    const nric = nricInput.toUpperCase();

    if (!nricRegex.exec(nric)) {
        return false;
    }

    const nricArr = nric.match(nricRegex);
    const nricType = nricArr[1];

    if (!nricTypeRegex.exec(nricType)) {
        return false;
    }

    const nricDigitsArr = nricArr[2].split('');
    let total = 0;
    for (let i = 0; i < nricDigitsArr.length; i++) {
        total += parseInt(nricDigitsArr[i]) * weightArr[i];
    }

    if (['T', 'G'].indexOf(nricType) >= 0) {
        total += 4;
    }

    const letterIndex = total % 11;
    const nricLetter = nricArr[3];
    if (['S', 'T'].indexOf(nricType) >= 0) {
        return nricLetterST[letterIndex] === nricLetter;
    }

    return nricLetterFG[letterIndex] === nricLetter;
}