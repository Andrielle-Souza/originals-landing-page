// variáveis globais
let visual1 = document.querySelector('.checked1');
let visual2 = document.querySelector('.checked2');
let visual3 = document.querySelector('.checked3');
let selectbox1 = document.querySelector('#radio1');
let selectbox2 = document.querySelector('#radio2');
let selectbox3 = document.querySelector('#radio3');
let radioSection = document.querySelector('.radio-section');


window.addEventListener('load', function(){
    selectbox1.checked = false;
    selectbox2.checked = false;
    selectbox3.checked = false;
})

function enableVisual1(){

    visual1.classList.add('showFade');
    visual2.classList.remove('showFade');
    visual3.classList.remove('showFade');
}

function enableVisual2(){

    visual2.classList.add('showFade');
    visual1.classList.remove('showFade');
    visual3.classList.remove('showFade');
}

function enableVisual3(){

    visual3.classList.add('showFade');
    visual1.classList.remove('showFade');
    visual2.classList.remove('showFade');
}

radioSection.addEventListener('change', function(){

    if(selectbox1.checked == true){
        return enableVisual1();
    }else if(selectbox2.checked == true){
        return enableVisual2()
    }else{
        return enableVisual3()
    }
    

})


/* ----------------------------- CUSTOM CHECKBOX ---------------------------- */

let csContainer = document.querySelector('.cs-cb-container');
let csChecker = document.querySelector('.cs-check')
let csBorder = document.querySelector('.checkmark');

csContainer.addEventListener('change', ()=>{
    if(csChecker.checked == true){

        csContainer.classList.add('colorChange')
        csBorder.classList.add('borderChange')

    } else {

        csContainer.classList.remove('colorChange')
        csBorder.classList.remove('borderChange')


    }
})

/* ----------------------------------- // ----------------------------------- */

 /* ---------------------------- focus/blur events --------------------------- */
let biInputLabel1 = document.querySelector('.biInputLabel1');
let biInputLabel2 = document.querySelector('.biInputLabel2');
let biInputLabel3 = document.querySelector('.biInputLabel3');

let biInput1 = document.querySelector('.biInput1');
let biInput2 = document.querySelector('.biInput2');
let biInput3 = document.querySelector('.biInput3');

biInput1.addEventListener('focus', ()=>{
    biInputLabel1.classList.add('showLabel');
});
biInput1.addEventListener('blur', ()=>{
    biInputLabel1.classList.remove('showLabel');
});

biInput2.addEventListener('focus', ()=>{
    biInputLabel2.classList.add('showLabel');
});
biInput2.addEventListener('blur', ()=>{
    biInputLabel2.classList.remove('showLabel');
});

biInput3.addEventListener('focus', ()=>{
    biInputLabel3.classList.add('showLabel');
});
biInput3.addEventListener('blur', ()=>{
    biInputLabel3.classList.remove('showLabel');
});
/* ----------------------------------- // ----------------------------------- */

/* --------------------------------- submit --------------------------------- */



/* ----------------------------------- // ----------------------------------- */