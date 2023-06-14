




for (let n = 1; n <= 100; n++){
    
    let box = document.createElement('div')
    box.className = 'col'
    document.querySelector('.row').append(box)
    
    box.innerText = n

    // let text = document.createElement("h1");
    // text.innerText = n;
    // document.querySelector('.col').append(text)
    // document.body.appendChild(text);
    console.log('nnumber', n)
    
    if (n % 3 == 0 && n % 5 == 0){
        box.innerText = 'FizzBuzz'
        box.classList.add('fizzbuzz')
        console.log('nnumber is divided by both', n)
    }
    else if (n % 3 == 0){
        box.innerText = 'Fizz'
        box.classList.add('fizz')
        console.log('nnumber is divided by 3', n)
    }
    else if (n % 5 == 0){
        box.innerText = 'Buzz'
        box.classList.add('buzz')
        console.log('nnumber is divided by 5', n)
    }
}