function addition(){
    let fristnumber = +document.getElementById('fristnumber').value;
    let seconnumber = +document.getElementById('secondnumber').value;
    result = fristnumber+seconnumber;
    document.getElementById('result').innerHTML = "result: " +result;
}
function subtraction(){
    let fristnumber = +document.getElementById('fristnumber').value;
    let seconnumber = +document.getElementById('secondnumber').value;
    result = fristnumber-seconnumber;
    document.getElementById('result').innerHTML = "result: " +result;
}
function multiplication(){
    let fristnumber = +document.getElementById('fristnumber').value;
    let seconnumber = +document.getElementById('secondnumber').value;
    result = fristnumber*seconnumber;
    document.getElementById('result').innerHTML = "result: " +result;
}
function Division(){
    let fristnumber = +document.getElementById('fristnumber').value;
    let seconnumber = +document.getElementById('secondnumber').value;
    result = fristnumber/seconnumber;
    document.getElementById('result').innerHTML = "result: " +result;
}
