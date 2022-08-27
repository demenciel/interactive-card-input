// Variables
let nameHolder = document.querySelector('#name');
let number = document.querySelector('#number');
let dateMonth = document.querySelector('#date-month');
let dateYear = document.querySelector('#date-year');
let cvc = document.querySelector('#cvc');

// Cards
let cardNumber = document.querySelector('#card-number');
let cardName = document.querySelector('#card-name');
let cardMonth = document.querySelector('#month');
let cardYear = document.querySelector('#year');
let cardCvc = document.querySelector('#card-cvc')

// Form
let form = document.querySelector('.form');
let formDone = document.querySelector('.form-done');
// Button
let btn = document.querySelector('#submit-button')



// Card Animation
nameHolder.addEventListener('keyup', () => {
    let name = nameHolder.value;
    cardName.innerHTML = name;
});


number.addEventListener('keyup', () => {
    let numberX = number.value;
    let numberInt = parseInt(numberX);
    cardNumber.innerHTML = numberInt;
});

dateMonth.addEventListener('keyup', () => {
    let numberX = dateMonth.value;
    let numberInt = parseInt(numberX);
    cardMonth.innerHTML = numberInt;
});

dateYear.addEventListener('keyup', () => {
        let numberX = dateYear.value;
        let numberInt = parseInt(numberX);
        cardYear.innerHTML = numberInt;
    
});

cvc.addEventListener('keyup', () => {
    let numberX = cvc.value;
    let numberInt = parseInt(numberX);
    cardCvc.innerHTML = numberInt;

});



// Change Display

function checkInput(a) {
     if (a.value == "") {
         a.classList.add('error');
         $(a).after("<p class='error-text'>Can't be blank</p>")
     } else {
        a.classList.remove('error');
        a.classList.add('confirmation')
        return true
     }
};

function checkInputDateYear(a) {
    if (a.value == "") {
        a.classList.add('error');
        $(a).after("<div class='error-text-date'>Can't be blank</div>")
    } else {
       a.classList.remove('error');
       a.classList.add('confirmation')
       return true
    }
};


$('#submit-btn').click((e)=> {
    e.preventDefault();


    if((checkInput(nameHolder) && checkInput(number) && checkInput(dateMonth)
    && checkInput(dateYear) && checkInput(cvc)) === true) {
        $('.form').hide();
        $('.form-done').css('display', 'flex');
    }

});


// Submit Form

$('#submit-btn-complete').click(()=> {
    window.location.reload();
    $('.form-done').hide();
    $('.form').css('display', 'flex');
    
});


