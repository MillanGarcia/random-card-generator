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
  carta.style.padding = "3%";

  function changeSize() {
    let height1 = document.getElementById("hcard");

    let number1 = height1.value + "px";

    let fontnumberh = (80 * height1.value) / 300;

    /*let fontsize1 = fontnumberh + "px";*/

    /*carta.style.fontSize = fontsize1;*/
    carta.style.height = number1;

    let width1 = document.getElementById("wcard");
    let number2 = width1.value + "px";
    let fontnumberw = (80 * width1.value) / 180;

    if (fontnumberh >= fontnumberw) {
      /*let percentage = fontnumberw / fontnumberh;
      let result = percentage * fontnumberh;*/
      let fontsize2 = fontnumberh + "px";

      carta.style.fontSize = fontsize2;
    } else {
      let percentage = fontnumberh / fontnumberw;
      let result = percentage * fontnumberw;
      let fontsize2 = result + "px";
      carta.style.fontSize = fontsize2;
    }
    /*let fontsize2 = fontnumberw + "px";*/

    carta.style.width = number2;
  }

  document.getElementById("btn").onclick = function() {
    changeSize();
  };

  /*setInterval(changeSize, 3000);*/

  const part1 = document.getElementById("parte1");
  part1.style.width = "inherit";
  part1.style.height = "33%";
  /*part1.style.marginTop = "-9.96%";*/
  /*part1.style.float = "50px";*/

  part1.style.textAlign = "left";
  const part2 = document.getElementById("parte2");
  part2.style.width = "inherit";
  part2.style.margin = "auto";
  part2.style.textAlign = "center";
  part2.style.height = "33%";
  /*part2.style.paddingTop = "10%";*/

  const part3 = document.getElementById("parte3");
  part3.style.width = "inherit";
  part3.style.textAlign = "right";
  part3.style.marginRight = "5%";
  part3.style.height = "33%";
  /*part3.style.paddingTop = "10%";*/

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
  document.getElementById("btn2").onclick = function() {
    CardGen1();
  };

  setInterval(CardGen1, 10000);
};
