var dataInputElem = document.querySelector('dataInput');
var dispalyQ = document.querySelector('.questionDisplay');
var textBox = document.querySelector('#questionBox');
var addBtn = document.querySelector('.addBtn');

var instance = DigitalQQ();

var messageElem = document.querySelector('.updateMessage');


function qqAddBtn(){
    var inputQuestion = textBox.value;
    var qqCheck = /^[A-Za-z0-9]{5,1000}\.[A-Za-z0-9]{5,1000}$/;
    var result = qqCheck.test(inputQuestion);

    var qqList = [];
    for (var q in qqList){
        const element = qqList[q];
        createQbox(element)
    }


    if(result === true){

    }
    qqDisplay(inputQuestion);
}

function qqDisplay(question){
    dispalyQ.innerHTML = " ";
    createQbox(question)

}

function createQbox(question){
    var qList = document.createElement("li")
    qList.textContent = question;
    dispalyQ.appendChild(qList);
}

addBtn.addEventListener('click', qqAddBtn);