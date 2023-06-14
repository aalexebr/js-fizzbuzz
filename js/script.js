for (let n = 1; n <= 15; n++){
    console.log('nnumber', n)
    if (n % 3 == 0 && n % 5 == 0){
        console.log('nnumber is divided by both', n)
    }
    else if (n % 3 == 0){
        console.log('nnumber is divided by 3', n)
    }
    else if (n % 5 == 0){
        console.log('nnumber is divided by 5', n)
    }
}