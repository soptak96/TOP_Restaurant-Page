import  aboutContent from "./about.js";
import menuContent from "./menu.js";
import {content} from "./config.js";
import "./style.css";


const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about")

function displayHome() {
    const menuFromHome = document.createElement("button");
    menuFromHome.textContent = "Explore Menu";
    menuFromHome.classList.add("menu-from-home");
    menuFromHome.addEventListener("click", menuContent)
    
    content.innerHTML =`
    <h1 id="brand_name">Bengal Tea</h1>
    <h2 class="home-content">Welcome!</h2>
    <div class="line"></div>
    <p class="home-content home-p">feel the authentic taste of bengal!</p>
    <div class="button-container"></div>
    `
        const buttonContainer = content.querySelector(".button-container");
        buttonContainer.appendChild(menuFromHome);
}

function clearContent(){
    content.innerHTML ="";
    content.classList.remove("white-bg");
}

displayHome();
aboutBtn.addEventListener("click", () => {
    clearContent();
    aboutContent();
    console.log("hello")
})

menuBtn.addEventListener("click", () =>{
    clearContent();
    menuContent();
})

homeBtn.addEventListener("click", () => {
    clearContent();
    displayHome();
})


