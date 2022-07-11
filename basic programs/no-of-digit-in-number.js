const noOfDigitsInNumber = num => {
    if (!num) console.log('Please give a number');
    if (typeof +num !== 'number') console.log('Not an number');
    let count = 0;
    do {
        count++;
        num = Math.floor(num/10);
    } while(num/10);
    console.log(count);
}

noOfDigitsInNumber(1234);
