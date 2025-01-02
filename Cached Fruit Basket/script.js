const firstBasket = document.querySelector(".basket-one span");
const secondBasket = document.querySelector(".basket-two span");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");

const totalApples = 10;

let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;

firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightButton.addEventListener("click", (e) => {
  if (firstBasketAppleCount > 0) {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount;
  }
});

leftButton.addEventListener("click", (e) => {
  if (secondBasketAppleCount > 0) {
    firstBasketAppleCount++;
    firstBasket.innerText = firstBasketAppleCount;
    secondBasketAppleCount--;
    secondBasket.innerText = secondBasketAppleCount;
  }
});
