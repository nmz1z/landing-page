//// VAR
// slider
let sliderContainer = document.getElementById("slider");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");

let containerDim = sliderContainer.getBoundingClientRect();
let containerWid = containerDim.width;

let animation = false;

var queryWidth = window.matchMedia("(max-width: 900px)");

// quotes
let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("author");
let quoteButton = document.getElementById("quote-button");

// functions: buttons
function goNext(){
    if(!animation){
        animation = true;
        containerDim = sliderContainer.getBoundingClientRect();
        containerWid = containerDim.width;
        console.log("next");
        if(queryWidth.matches){
            sliderContainer.scrollLeft += containerWid;
        }else {
            sliderContainer.scrollLeft += containerWid/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}
function goBack(){
    if(!animation){
        animation = true;
        containerDim = sliderContainer.getBoundingClientRect();
        containerWid = containerDim.width;
        console.log("back");
        if(queryWidth.matches){
            sliderContainer.scrollLeft -= containerWid;
        }else {
            sliderContainer.scrollLeft -= containerWid/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}
function adjustByQuery(){
        console.log(queryWidth);
        if (queryWidth.matches){
            sliderContainer.style.scrollBehavior = "auto";
            sliderContainer.scrollLeft -= 7*containerWid;
            sliderContainer.style.scrollBehavior = "smooth";
        } 
}
// functions: quotes
function getQuote(){
    console.log("oi")
    let index = Math.floor(Math.random() * quotesArray.length);
    quoteText.textContent = quotesArray[index].quote;
    quoteAuthor.textContent = quotesArray[index].author;
}
// ini
window.addEventListener('resize', adjustByQuery);
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goBack);
quoteButton.addEventListener("click", getQuote);
