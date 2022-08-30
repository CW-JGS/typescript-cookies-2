import './style.css';
import { Cookie } from './models/Cookie';
import { Colours } from './models/Colours';
let cookieArray: Cookie[];
const btn1 = document.querySelector("#changeColour-btn");
btn1.addEventListener("click", () => {
  changeColour();
});
const btn2 = document.querySelector("#addChocolateChip-btn");
btn2.addEventListener("click", ()=> {
  addChocolateChip();
})
const addCookie = document.getElementById("addCookie-btn")
addCookie.addEventListener("click", () => {
  bake();
});
const addSprinkleCookie = document.getElementById("addSprinkleCookie-btn");
addSprinkleCookie.addEventListener("click", ()=> {
  bakeSprinkled();
})
const eatCookie = document.getElementById("eatCookie-btn");
eatCookie.addEventListener("click", ()=> {
  eat();
})
const dropdown:HTMLSelectElement = document.querySelector("#cookieSelector");
const cci:HTMLInputElement = document.querySelector<HTMLInputElement>('#cookieColour-inp');
function init() {
  cookieArray = new Array<Cookie>;
  for(let i = 0; i<2; i++)
  {
    cookieArray = [new Cookie(`cookie${i+1}`), ...cookieArray];
  }
  addOptions();
  cci.value = cookieArray[0].colour.toString();
  updateDisplay();
}
function drawCookies() {
  const cookieSpace = document.querySelector('#cookiesDiv');
  cookieSpace.innerHTML = "";
  cookieArray.forEach(item => {
    let cookie = document.createElement('div');
    cookie.className = "cookie";
    cookie.style.backgroundColor = `${item.colour}`;
    cookie.innerText = item.chocolateChipNum.toString();
    cookieSpace.append(cookie);
  })  
}
function changeColour(_selectedCookie = dropdown.selectedIndex, _colour = cci.value) {
  let colour = _colour.charAt(0).toUpperCase() + _colour.slice(1);
  console.log(colour)
  cookieArray[_selectedCookie].colour = Colours[colour as Colours]
  updateDisplay();
}
function addChocolateChip(_selectedCookie = dropdown.selectedIndex) {
  cookieArray[_selectedCookie].chocolateChipNum += 1;
  updateDisplay();
}
function eat() {
  cookieArray.pop();
  updateDisplay();
}
function bake()
{
  cookieArray.push(new Cookie("cookieName"))
  updateDisplay();
}
function bakeSprinkled()
{
  cookieArray.push(new Cookie("sprinkleCookie"))
  updateDisplay();
}
function addOptions()
{
  dropdown.innerHTML = "";
  cookieArray.forEach((item, idx) => {
    let element: HTMLOptionElement = document.createElement("option");
    element.value = idx.toString();
    element.innerHTML = item.name;
    dropdown.append(element)
  })
}
function updateDisplay() {
  addOptions();
  drawCookies();
}
init();