const url = "https://baconipsum.com/api/?type=lucky";
export const getText = async () => {
  let response = await fetch(url);
  let text = await response.json();

  text.forEach((el) => printText(el));
};

const printText = (text) => {
  let textParent = document.querySelector(".promo__text");
  let paragraf = document.createElement("p");

  paragraf.classList.add("promo__text-content");
  paragraf.innerText = text;
  textParent.append(paragraf);
};
