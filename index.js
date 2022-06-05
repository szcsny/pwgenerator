let style = document.getElementsByClassName("password");

let start = '!'.charCodeAt(0);
let finish = 'z'.charCodeAt(0);

let pwLength = 0;

function copyValue(clicked_id){
    let copyText = document.getElementById(clicked_id).textContent;
    var el = document.createElement('textarea');
    // Creating a textfield for copying to clipboard
    el.value = copyText;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function storeRadioValue(){
    let radios = document.getElementsByName("pwlength");

    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            pwLength = radios[i].value;
        }
    }
}

function generate(){
    storeRadioValue();
    for(let i=1; i<5; i++){
        let pwEl = document.getElementById("p" + i + "-el");
        let password = "";
        for (let i=0; i<pwLength; i++){
            let letterIndex = start + Math.floor(Math.random()*(finish-start));
            password += String.fromCharCode(letterIndex);
        }
        pwEl.textContent = password;
    }
    style.color = "#55F991";
}

function setColor(clicked_id){
    let element = document.querySelector("#" + clicked_id);
    let style = window.getComputedStyle(element);
    let bgc = style.background;
    let c = style.color;
    
    document.querySelector(":root").style.setProperty("--emphasis-color", c);
    document.querySelector(":root").style.setProperty("--button-color", bgc);
}

function setMode(clicked_id){
    if(clicked_id === "light"){
        document.querySelector(":root").style.setProperty("--background-color", "#ECFDF5");
        document.querySelector(":root").style.setProperty("--text-color", "#1F2937");
    } else if(clicked_id === "dark"){
        document.querySelector(":root").style.setProperty("--background-color", "#1F2937");
        document.querySelector(":root").style.setProperty("--text-color", "#D5D4D8");
    } 
}