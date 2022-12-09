// VARIABLES
// navbar
let navAbout = document.getElementById("nav-about");
let navProjects = document.getElementById("nav-projects");
let navQuotes = document.getElementById("nav-quotes");
let navList = document.getElementById("nav-list");

let hamburgerButton = document.getElementById("hamburger");

// slider
let sliderContainer = document.getElementById("slider");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("previous");
let containerDimension = sliderContainer.getBoundingClientRect();
let containerWidth = containerDimension.width;
let animation = false;
let containerIndex = 0;
var queryWidth = window.matchMedia("(max-width: 900px)");

// quotes
let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("author");
let quoteButton = document.getElementById("quote-button");

// functions: navbar
function handleHamburgerClick(){
    navList.classList.toggle("nav-list--display");
}

// functions: buttons
function goNext(){
    if(containerIndex < projectsArray.length - 1){
        containerIndex++
    }else{}
    if(!animation){
        animation = true;
        containerDimension = sliderContainer.getBoundingClientRect();
        containerWidth = containerDimension.width;
        if(queryWidth.matches){
            sliderContainer.scrollLeft += containerWidth;
        }else {
            sliderContainer.scrollLeft += containerWidth/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}
function goBack(){
    if(containerIndex > 0){
        containerIndex--
    }else{}
    if(!animation){
        animation = true;
        containerDimension = sliderContainer.getBoundingClientRect();
        containerWidth = containerDimension.width;
        if(queryWidth.matches){
            sliderContainer.scrollLeft -= containerWidth;
        }else {
            sliderContainer.scrollLeft -= containerWidth/2;
        }
        setTimeout(() => {animation = false;}, 500)
    }
}

// adjust container view on window resize
function adjustByQuery(){
        if (queryWidth.matches){
            sliderContainer.style.scrollBehavior = "auto";
            let sliderOffset = sliderContainer.offsetLeft;
            let positionBox = projectObjects[containerIndex].offsetLeft;
            sliderContainer.scrollTo(0, 0);
            sliderContainer.scrollLeft = positionBox - sliderOffset;
            sliderContainer.style.scrollBehavior = "smooth";
        }
}

// get a new random quote and update text
function getQuote(){
    let index = Math.floor(Math.random() * quotesArray.length);
    quoteText.textContent = quotesArray[index].quote;
    quoteAuthor.textContent = quotesArray[index].author;
}
// create projects elements and inject in html
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

// inject projects
getProjects(projectsArray);
// buttons events
window.addEventListener("resize", adjustByQuery);
nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goBack);
quoteButton.addEventListener("click", getQuote);
// navbar events
hamburgerButton.addEventListener("click", handleHamburgerClick);
navAbout.addEventListener("click", () =>{document.getElementById("about-section").scrollIntoView({ behavior: "smooth", block: "center"});})
navProjects.addEventListener("click", () =>{document.getElementById("projects-section").scrollIntoView({ behavior: "smooth", block: "center"});})
navQuotes.addEventListener("click", () =>{document.getElementById("quote-section").scrollIntoView({ behavior: "smooth", block: "center"});})
// get project Objects after injection
getQuote()
let projectObjects = document.getElementsByClassName("project-box");
// scroll to About-me (center)
document.getElementById("about-section").scrollIntoView({ block: "center"});
