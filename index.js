//carousel
let movies = [
    {
        name: "Falcon and the Winter Soldier",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut corrupti ducimus eaque, nihil voluptatibus!",
        image: "./Images/slider 2.PNG"
    },
    {
        name: "Loki",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut corrupti ducimus eaque, nihil voluptatibus!",
        image: "./Images/slider 1.PNG"
    },
    {
        name: "Wanda Vision",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut corrupti ducimus eaque, nihil voluptatibus!",
        image: "./Images/slider 3.PNG"
    },
    {
        name: "Raya and the Last Dragon",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut corrupti ducimus eaque, nihil voluptatibus!",
        image: "./Images/slider 4.PNG"
    },
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ut corrupti ducimus eaque, nihil voluptatibus!",
        image: "./Images/slider 5.PNG"
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex = 0;
    }

    //create DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length -2)}px)`;
    }
}

for(let i=0; i<3; i++){
    createSlide();    
}

setInterval(() => {
    createSlide();
},3000);

//image card
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card slider
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth= containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    });
});