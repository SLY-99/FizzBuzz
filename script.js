const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elTitle = document.getElementById("title");


elForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    
    if(!isNaN(elInput.value)){
        if(elInput.value%3 === 0 && elInput.value%5 === 0){
            elTitle.textContent = "FizzBuzz";
        }else if(elInput.value%5 === 0){
            elTitle.textContent = "Buzz"
        }else if(elInput.value%3 === 0){
            elTitle.textContent = "Fizz";
        }else{
            elTitle.textContent = elInput.value;
        }
    }else{
        elTitle.textContent = "Type a number";
    }
})
