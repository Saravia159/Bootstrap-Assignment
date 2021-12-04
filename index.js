//Boxes
const box1 = document.querySelector('#box-1');
const box2 = document.querySelector('#box-2');
const box3 = document.querySelector('#box-3');


//Button Change
const cBtn1 = document.querySelector('#change-btn1');
const cBtn2 = document.querySelector('#change-btn2');
const cBtn3 = document.querySelector('#change-btn3');
const changeAll = document.querySelector('#change-all');


//Hide
const hBtn1 = document.querySelector('#hide-btn1');
const hBtn2 = document.querySelector('#hide-btn2');
const hBtn3 = document.querySelector('#hide-btn3');
const hideAll = document.querySelector('#hide-all');


//Reset Colors
const reset = document.querySelector('#reset-colors');


//Show All
const show = document.querySelector('#show-all');



let boxes = [...document.querySelectorAll('.box')];


//Random Color
const randomColor = ()=>{
    let color = Math.floor(Math.random()*16777215).toString(16);
    return `#${color}`;
}


//Change boxes
cBtn1.addEventListener('click',()=>{
    box1.style.backgroundColor = randomColor();
})
cBtn2.addEventListener('click',()=>{
    box2.style.backgroundColor = randomColor();
})
cBtn3.addEventListener('click',()=>{
    box3.style.backgroundColor = randomColor();
})
changeAll.addEventListener('click',()=>{
   boxes.map(box=>box.style.backgroundColor = randomColor())

})


//Hide boxes
hBtn1.addEventListener('click',()=>{
    box1.style.visibility = 'hidden';
})
hBtn2.addEventListener('click',()=>{
    box2.style.visibility = 'hidden'
})
hBtn3.addEventListener('click',()=>{
    box3.style.visibility = 'hidden'
})

hideAll.addEventListener('click',()=>{
 boxes.map(box=>box.style.visibility = 'hidden')
})


//Show all boxes
show.addEventListener('click',()=>{
    boxes.map(box=>box.style.visibility = 'visible')
})

//Reset all boxes
reset.addEventListener('click',()=>{
    boxes.map(box=>box.style.backgroundColor = '')
})