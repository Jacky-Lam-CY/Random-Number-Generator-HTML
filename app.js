function generateRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createNewInputField(){
    const newMinInput = document.createElement("input");
    newMinInput.setAttribute('type', "number");
    newMinInput.setAttribute('class', "min-number");
    newMinInput.setAttribute('placeholder', "Min");

    const newMaxInput = document.createElement("input");
    newMaxInput.setAttribute('type', "number");
    newMaxInput.setAttribute('class', "max-number");
    newMaxInput.setAttribute('placeholder', "Max");

    const newRemoveBtn = document.createElement("button");
    newRemoveBtn.setAttribute('class', "removeBtn");
    newRemoveBtn.textContent = '-';

    const li = document.createElement("li");
    li.append(newMinInput);
    li.append(newMaxInput);
    li.append(newRemoveBtn);
    
    return li;
}

const addBtn = document.getElementById('addBtn');
const list = document.querySelector(".list");

addBtn.addEventListener('click', () => {
    list.appendChild(createNewInputField());


});

list.addEventListener('click', (e) => {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if(button.className == "removeBtn"){
        ul.removeChild(li);
    }
});

const generateBtn = document.querySelector(".generate-button");
const generatedNumber = document.querySelector(".generated-number");

generateBtn.addEventListener("click", () => {
    const inputItems = list.getElementsByTagName("li");
    const generatedNumbers = [];
    var count = 0;

    for(let i = 0; i < inputItems.length; i++){
        const minValue = inputItems[i].querySelector(".min-number").value;
        const maxValue = inputItems[i].querySelector(".max-number").value;

        console.log(minValue, maxValue);

        if(minValue == null || maxValue == null || minValue > maxValue){
            continue;
        }
            
        generatedNumbers.push(generateRandomInteger(minValue, maxValue));
        count++;
    }

    var outputList = "";

    generatedNumbers.forEach((e) => {
        outputList += e + ",";
    });

    generatedNumber.textContent = outputList;

});