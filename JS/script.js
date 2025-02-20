// Get the elements
const height = document.querySelector('.Height');
const width = document.querySelector('.Width');
const RA_DEC = document.querySelector('.RA-DEC');
const fov = document.querySelector('.FOV');
const select = document.querySelector('.Select');



let heightValue;
let widthValue;
let RA_DECValue;
let fovValue;
let selectValue;




if (select != undefined){
    if(select.value == 'DSS2 Color'){
        selectValue = 'P/DSS2/color';
    } else if(select.value == '2MASS Color'){
        selectValue = 'P/2MASS/color';
    } else if(select.value == 'Mellinger Color'){
        selectValue = 'P/Mellinger/color';
    }
    select.addEventListener('change', (e) => {
        if(select.value == 'DSS2 Color'){
            selectValue = 'P/DSS2/color';
        } else if(select.value == '2MASS Color'){
            selectValue = 'P/2MASS/color';
        } else if(select.value == 'Mellinger Color'){
            selectValue = 'P/Mellinger/color';
        } console.log(selectValue);});
}




// Get the form
const form = document.querySelector('.form');
console.log(form);
console.log(select);

// Add event listener to the form
if(form != undefined){
    
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    heightValue = height.value;
    widthValue = width.value;
    RA_DECValue = RA_DEC.value;
    fovValue = fov.value;

    console.log(fovValue);

    localStorage.setItem('fov', fovValue);
    localStorage.setItem('RADEC', RA_DECValue);
    localStorage.setItem('select', selectValue);

    window.location.href = 'AladinPage.html';
    
    console.log(localStorage.getItem('RADEC'));
});
}

if(A != undefined){
    console.log(localStorage.getItem('select'));
    let aladin;
    A.init.then(() => {
        aladin = A.aladin('#aladin-lite-div', {survey: localStorage.getItem('select'), fov:localStorage.getItem('fov'), target: localStorage.getItem('RADEC')});
    });
}
