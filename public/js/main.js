function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const wrapper = document.querySelector(".wrapper");
const background = document.querySelector(".background");
const container_card = document.querySelector(".container_card");

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const minX = window.innerWidth * 0.25;
    const maxX = window.innerWidth * 0.85 - card.offsetWidth;
    const minY = window.innerHeight * 0.25;
    const maxY = window.innerHeight * 0.75 - card.offsetHeight;

    card.style.left = `${getRandomInt(maxX - minX) + minX}px`;
    card.style.top = `${getRandomInt(maxY - minY) + minY}px`;

    const zValue = getRandomInt(250);
    card.style.transform = `perspective(500px) translateZ(${zValue}px)`;

    const brightnessValue = (150 / 100) * zValue;
    card.style.filter = `brightness(${brightnessValue}%)`;

    card.addEventListener("mousemove", () => {
      card.style.transform = `perspective(500px) translateZ(${300}px)`;
      card.style.transition = `0.5s`;
      card.style.filter = `brightness(${100}%)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(500px) translateZ(${zValue}px)`;
      card.style.transition = `0.5s`;
      card.style.filter = `brightness(${brightnessValue}%)`;
    });
  });
});

//   Chuyển động khi di chuyển chuột ở vùng màn hình
wrapper.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
  const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

  //   Hình nền quay theo góc +- 5 độ
  background.style.transform = `rotateX(${y * 5}deg) rotateY(${
    x * 5
  }deg) scale(1.1)`;
  container_card.style.transform = `rotateX(${-y * 30}deg) rotateY(${
    x * 20
  }deg)`;
});
