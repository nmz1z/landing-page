// VARIABLES
// slider
let sliderContainer = document.getElementById("slider");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");

let containerDimension = sliderContainer.getBoundingClientRect();
let containerWidth = containerDimension.width;

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
        containerDimension = sliderContainer.getBoundingClientRect();
        containerWidth = containerDimension.width;
        console.log("next");
        if(queryWidth.matches){
            sliderContainer.scrollLeft += containerWidth;
        }else {
            sliderContainer.scrollLeft += containerWidth/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}
function goBack(){
    if(!animation){
        animation = true;
        containerDimension = sliderContainer.getBoundingClientRect();
        containerWidth = containerDimension.width;
        console.log("back");
        if(queryWidth.matches){
            sliderContainer.scrollLeft -= containerWidth;
        }else {
            sliderContainer.scrollLeft -= containerWidth/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}
function adjustByQuery(){
        console.log(queryWidth);
        if (queryWidth.matches){
            sliderContainer.style.scrollBehavior = "auto";
            sliderContainer.scrollLeft -= 7*containerWidth;
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
// inject projects in the slider container
function getProjects(array){
    for(let i = 0; i < array.length; i++){
    //add div container
    let box = document.createElement("div");
    box.classList.add("project-box");
    sliderContainer.append(box);
        //add anchor (wrap image container)
        let link = document.createElement("a");
        box.append(link);
        link.href = array[i].link;
            //add div (img container)
            let imgContainer = document.createElement("div"); 
            link.append(imgContainer);
            imgContainer.classList.add("project-img");
                //add img (project cover)
                let image = document.createElement("img");
                image.src = array[i].img;
                imgContainer.append(image);
                image.classList.add("project-img");
                //add mask (hover mask)
                let mask = document.createElement("div");
                imgContainer.append(mask);
                mask.classList.add("project-mask");
                //add p (hover text)
                let text = document.createElement("p");
                text.classList.add("project-text");
                imgContainer.append(text);
                text.textContent = array[i].text;
        //add div (title container)
        let title = document.createElement("div");
        title.classList.add("project-name");
        box.append(title);
        //add p (title)
        let titleText = document.createElement("p");
        title.append(titleText);
        titleText.textContent = array[i].title;
    }
}

// initialize
getProjects(projectsArray);
window.addEventListener('resize', adjustByQuery);
nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goBack);
quoteButton.addEventListener("click", getQuote);
