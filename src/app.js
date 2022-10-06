/* eslint-disable */
/*import "bootstrap";
import "./style.css";*/ //para npm, para live-server no hace falta
window.onload = function() {
  document.body.style.backgroundColor = "green";

  const carta = document.querySelector(".card");
  carta.classList.add(
    "esquinas"
  ); /*no me funciona la clase si la añado mediante classList */
  carta.style.margin = "auto";
  carta.style.fontSize = "80px";
  carta.style.width = "180px";
  carta.style.height = "300px";
  carta.style.backgroundColor = "white";
  carta.style.display = "in-block";
  carta.style.borderRadius = "5px";
  carta.style.padding = "30px";

  const part1 = document.getElementById("parte1");
  part1.style.width = "inherit";
  part1.style.maxHeight = "33%";
  part1.style.marginTop = "-20px";
  /*part1.style.float = "50px";*/

  part1.style.textAlign = "left";
  const part2 = document.getElementById("parte2");
  part2.style.width = "inherit";
  part2.style.margin = "auto";
  part2.style.textAlign = "center";
  part2.style.maxHeight = "33%";
  part2.style.paddingTop = "20px";

  const part3 = document.getElementById("parte3");
  part3.style.width = "inherit";
  part3.style.textAlign = "right";
  part3.style.marginRight = "50px";
  part3.style.maxHeight = "33%";
  part3.style.paddingTop = "30px";

  const icons = ["♦", "♥", "♠", "♣"];

  function CardGen1() {
    let numero1 = Math.floor(Math.random() * 3);
    let color =
      numero1 === 0 //   valor de "♦" en array icons
        ? (carta.style.color = "red")
        : numero1 === 1 // valor de  "♥" en array icons
        ? (carta.style.color = "red")
        : (carta.style.color = "black");
    const numero2 = Math.floor(Math.random() * 12 + 1);
    let valor_carta =
      numero2 === 1
        ? "A"
        : numero2 === 10
        ? "J"
        : numero2 === 11
        ? "Q"
        : numero2 === 12
        ? "K"
        : numero2;
    part1.innerHTML = icons[numero1];
    part2.innerHTML = valor_carta;
    part3.innerHTML = icons[numero1];
  }
  CardGen1();
};
