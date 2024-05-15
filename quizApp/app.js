let Input = document.querySelector('input')
let questionOne = document.querySelector('question1')
let options = document.querySelector('option1')
let btnOne = document.querySelector('btn')

let Questions = {
    one: 'what is a boy',
    answer: 'a boy is a boy'
}

// btnOne.addEventListener('click', function(){
//     questionOne.innerHTML = Questions.one
// })

function first(){
    questionOne.innerHTML = Questions.one
}