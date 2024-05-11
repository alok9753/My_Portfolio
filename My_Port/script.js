const hamburger = documnet.getElementBYId('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function(){
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if(hanIcon.style.display==="none"){
        hamIcon.style.display= "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else{
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});
document.getElementById("myButton").addEventListener("click", function(){
    alert("Button clicked");
});