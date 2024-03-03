import {content} from "./config.js";

export default function aboutContent() {
    content.innerHTML = `<h1>Bengal Tea</h1>
    <h2>About Us</h2>
    <div class="line"></div>
    <p class="about-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod</p>`
    content.classList.add("white-bg");
    console.log("How are you!")
}