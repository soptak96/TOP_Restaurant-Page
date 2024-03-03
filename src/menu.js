import {content} from "./config.js";
import "./style.css";

export default function menuContent() {
    content.innerHTML = `<h1>Bengal Tea</h1>
    <h2>MENU</h2>
    <div class="line"></div>
    <div class="menu">
    <h3>Masalla tea</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
    <h3>9.99$</h3>
    <div class="line-3"></div>
    </div>
    <div class="menu">
    <h3>Malai tea</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
    <h3>9.99$</h3>
    <div class="line-3"></div>
    </div>
    <div class="menu">
    <h3>Rong tea</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet</p>
    <h3>9.99$</h3>
    <div class="line-3"></div>
    </div>`
    content.classList.add("white-bg")
    console.log("Volla!")
}