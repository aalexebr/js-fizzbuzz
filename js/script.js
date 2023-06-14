




for (let n = 1; n <= 100; n++){
    // creates an element with a css class already defined after an html element .row
    let box = document.createElement('div')
    box.className = 'col'
    document.querySelector('.row').append(box)

    // puts in the text number of the iteration in the created div
    box.innerText = n
  
    // math conditions for the iterations
    // begin with the unique AND condition and proceed with the secondary
    // if the AND is last the iteration stops after the first if
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