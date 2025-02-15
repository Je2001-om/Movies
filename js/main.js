// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");




// menuIcon.onclick = () => {
//   navbar.classList.toggle("active");
// }
// window.onscroll = () => {
//   navbar.classList.remove("active");
// }

window.addEventListener("scroll", () => {
    const isScrolled = window.scrollY > 0;
    header.classList.toggle("shadow-bg", isScrolled)
    const textElements = document.querySelectorAll("header *");
    textElements.forEach(element => {
      element.classList.toggle("text-black", isScrolled);
      element.classList.toggle("text-red-500", !isScrolled);
    });
  });