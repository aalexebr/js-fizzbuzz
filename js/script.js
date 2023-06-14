




for (let n = 1; n <= 15; n++){

    let text = document.createElement("h1");
    text.innerText = n;
    document.body.appendChild(text);
    console.log('nnumber', n)
    
    if (n % 3 == 0 && n % 5 == 0){
        text.innerText = 'FizzBuzz';
        console.log('nnumber is divided by both', n)
    }
    else if (n % 3 == 0){
        text.innerText = 'Fizz';
        console.log('nnumber is divided by 3', n)
    }
    else if (n % 5 == 0){
        text.innerText = 'Buzz';
        console.log('nnumber is divided by 5', n)
    }
}