let lotteryForm = document.forms['lotteryForm'];
let proceedToPlay = document.querySelector('#proceedToPlay');
let twoSure = document.getElementById('twoSure');
let threeDirect = document.getElementById('threeDirect');

let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let num3 = document.querySelector('#num3');

let content1 = document.querySelector('#content1');
let content2 = document.querySelector('#content2');

let arrOfTwoSure = [];
let arrOfThreeDirect = [];

let appear = 0;

let randomGeneratedNums;

twoSure.addEventListener('click', ()=>{
    content1.innerHTML = "";
    content2.innerHTML = "";
    proceedToPlayGame();
    lotteryForm.style.display = "none";
    
    num1.value = "";
    num2.value = "";
    document.querySelector('#error').innerHTML = "";
    arrOfTwoSure = [];
    document.querySelector('#play').disabled = false;
})

threeDirect.addEventListener('click', ()=>{
    content1.innerHTML = "";
    content2.innerHTML = "";
    document.querySelector('#error').innerHTML = "";
    proceedToPlayGame();
    lotteryForm.style.display = "none";

    num1.value = "";
    num2.value = "";
    num3.value = "";
    arrOfThreeDirect = [];
    document.querySelector('#play').disabled = false;

})

function proceedToPlayGame(){
    proceedToPlay.innerHTML = "";
    proceedToPlay.innerHTML += `<button type="button" class="btn btn-success">Proceed to play</button>`;
}

function randomNumbers(){
    randomGeneratedNums = [];
    for(let i = 0; i < 5; i++){
        randomGeneratedNums.push(Math.floor(Math.random() * 99) + 1)
    }
}

function playGame(){
    num1.value = num1.value.trim();
    num2.value = num2.value.trim();
    num3.value = num3.value.trim();

    if(twoSure.checked){
        if(num1.value == "" || num2.value == ""){
            document.querySelector('#error').innerHTML = "<span style='color:red;'>You are expected to input a number</span>"
        }
        else if((isNaN(num1.value) && !Number.isInteger(num1.value)) || (isNaN(num2.value) && !Number.isInteger(num2.value))){
            document.querySelector('#error').innerHTML = "<span style='color:red;'>You are expected to input only a number</span>";
        }
        else{
            document.querySelector('#error').innerHTML = "";
            arrOfTwoSure.push(num1.value, num2.value);
            content2.innerHTML += `Your input numbers are: ${arrOfTwoSure} <br>
            Generated numbers are: ${randomGeneratedNums}`;

            if(randomGeneratedNums.includes(Number(arrOfTwoSure[0])) && 
            randomGeneratedNums.includes(Number(arrOfTwoSure[1]))){
                content2.innerHTML += `<br>You won!`;
            }
            else{
                content2.innerHTML += `<br>You lost!`
            }
        }
    }
    else{
        if(num1.value == "" || num2.value == "" || num3.value == ""){
            document.querySelector('#error').innerHTML = "<span style='color:red;'>You are expected to input a number</span>"
        }
        else if((isNaN(num1.value) && !Number.isInteger(num1.value)) ||
            (isNaN(num2.value) && !Number.isInteger(num2.value)) || 
            (isNaN(num3.value) && !Number.isInteger(num3.value)))
        {
            document.querySelector('#error').innerHTML = "<span style='color:red;'>You are expected to input only a number</span>";
        }
        else{
            document.querySelector('#error').innerHTML = "";
            arrOfThreeDirect.push(num1.value, num2.value, num3.value);
            content2.innerHTML += `Your input numbers are: ${arrOfThreeDirect} <br>
            Generated numbers are: ${randomGeneratedNums}`;
            
            if(randomGeneratedNums.includes(Number(arrOfThreeDirect[0])) &&
             randomGeneratedNums.includes(Number(arrOfThreeDirect[1])) &&
             randomGeneratedNums.includes(Number(arrOfThreeDirect[2]))){
                content2.innerHTML += `<br>You won!`;
            }
            else{
                content2.innerHTML += `<br>You lost!`
            }
        }  
    }
    if(document.querySelector('#error').innerHTML == ""){
        document.querySelector('#play').disabled = true;
    }
        
    
}

proceedToPlay.addEventListener('click', ()=>{
    lotteryForm.style.display = "block";
    num1.focus();
    if(twoSure.checked){
        document.querySelector('#num3').style.display = 'none';
    }
    else{
        document.querySelector('#num3').style.display = 'block';
    }
})

lotteryForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    randomNumbers();
    playGame();
})