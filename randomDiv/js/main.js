let sqr = document.querySelector(".sqr");

console.log(sqr);

setInterval(function(){
    let Box=document.createElement('div');
    Box.className=('box');
    Box.style.backgroundColor=RandomColorGenerator();
    Box.style.width=RandomNumberGenerator(20, 100) +"px";
    Box.style.height=RandomNumberGenerator(20, 100) +"px";
    Box.style.borderRadius="100%";
    Box.style.top=RandomNumberGenerator(1,100)+"%";
    // Box.style.bottom=RandomNumberGenerator(1,100)+"%";
    // Box.style.right=RandomNumberGenerator(1,100)+"%";
    Box.style.left=RandomNumberGenerator(1,100)+"%";
    sqr.appendChild(Box);
    

}, 2)





function RandomColorGenerator(){
    let symbols = "0123456789abcdef".split("");
    let color = "#";

    for(let i = 1; i <= 8; i++){
        color += symbols[RandomNumberGenerator(0, 15)];
    }

    return color;
}

function RandomNumberGenerator(min, max){
    return min + Math.round(Math.random()*(max-min));
}