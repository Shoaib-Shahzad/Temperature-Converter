let Celsius = document.getElementById("cel");
let Fahrenheit = document.getElementById("fah");

Celsius.addEventListener("input",function(){
    let C = this.value;
    let F = (C * 9/5) + 32;
    if(!Number.isInteger(F)){
        F = F.toFixed(3);
    }
    Fahrenheit.value = F;
})

Fahrenheit.addEventListener("input",function(){
    let F = this.value;
    let C = (F - 32) * 5/9;
    if(!Number.isInteger(C)){
        C = C.toFixed(3);
    }
    Celsius.value = C;
})