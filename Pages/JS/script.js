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




if(select != undefined){
    if(select.slot == 'DSS2 Color'){
        selectValue = 'P/DSS2/color';
    } else if(select.slot == '2MASS Color'){
        selectValue = 'P/2MASS/color';
    } else if(select.slot == 'Mellinger Color'){
        selectValue = 'P/Mellinger/color';
    }
    sessionStorage.setItem('select', selectValue);
}


// Get the form
const form = document.querySelector('form');
console.log(form);

// Add event listener to the form
if(form != undefined){
    
    form.addEventListener('submit', (e) => {
    e.preventDefault();
    heightValue = height.value;
    widthValue = width.value;
    RA_DECValue = RA_DEC.value;
    fovValue = fov.value;

    console.log(fovValue);

    sessionStorage.setItem('fov', fovValue);
    sessionStorage.setItem('RADEC', RA_DECValue);
    console.log(sessionStorage.getItem('RADEC'));
});
}

if(A != undefined){
    console.log(sessionStorage.getItem('RADEC'));
    let aladin;
    A.init.then(() => {
        aladin = A.aladin('#aladin-lite-div', {survey: selectValue, fov:sessionStorage.getItem('fov'), target: sessionStorage.getItem('RADEC')});
    });
}
