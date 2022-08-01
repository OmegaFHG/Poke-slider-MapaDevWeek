const btnFw = document.getElementById("btn-fw");
const btnBack = document.getElementById("btn-back");
const cartoes = document.querySelectorAll(".card");
let atualCard = 0;

function hideSelectedCard() {
  const cardSelected = document.querySelector(".selected");
  cardSelected.classList.remove("selected");
}

function showCard(indiceCartao) {
  cartoes[indiceCartao].classList.add("selected");
}

btnFw.addEventListener("click", function () {
  if (atualCard === cartoes.length - 1) return;

  hideSelectedCard();

  atualCard++;
  showCard(atualCard);
});

btnBack.addEventListener("click", function () {
  if (atualCard === 0) return;

  hideSelectedCard();

  atualCard--;
  showCard(atualCard);
});
