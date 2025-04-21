let itemsArray = [
  "Газонокосарка 43",
  "Електричний тример 110",
  "Електрична газонокосарка 32",
  "Акумуляторний обприскувач 12 N",
];
let itemsDiv = document.getElementById("items");
if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML += `
         <div class = "item">
          <h2>Товар №${index}</h2>
          <p>${item}</p>
         </div>
        `;
       })}