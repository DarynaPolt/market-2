let itemsArray = [
    {
      title: "Мотокоса 43",
      image: "img/1.png",
      partsPay6: true,
      partsPay8: true,
      oldPrice: "5 499",
      newPrice: "4 497",
      bonusPrice: "4 395",
    },
    {
      title: "Електричний тример 110",
      image: "img/2.png",
      partsPay6: false,
      partsPay8: true,
      oldPrice: "4 497",
      newPrice: "3 498",
      bonusPrice: "3 396",
    },
    {
      title: "Електрична газонокосарка 32",
      image: "img/3.png",
      partsPay6: true,
      partsPay8: true,
      oldPrice: "4 497",
      newPrice: "3 297",
      bonusPrice: "3 195",
    },
    {
      title: "Акумуляторний обприскувач 12 N",
      image: "img/4.png",
      partsPay6: true,
      partsPay8: false,
      oldPrice: "2 190",
      newPrice: "1 698",
      bonusPrice: "1 596",
    },
  
  ];
  
  let itemsDiv = document.getElementById("items");
  
  if (itemsDiv) {
    itemsArray.forEach((item) => {
      const itemHTML = `
        <div class="item">
          <div class="item-title">${item.title}</div>
          <div class="item-image">
            <img src="${item.image}" alt="${item.title}">
          </div>
          <div class="parts-pay">
            ${item.partsPay6 ? '<div><img src="img/mono-lapka.png" alt="">6</div>' : ''}
            ${item.partsPay8 ? '<div><img src="img/pb.png" alt="">8</div>' : ''}
          </div>
          <div class="price">
            <div><span>${item.oldPrice}</span><sup>грн</sup></div>
            <div><span>${item.newPrice}</span><sup>грн</sup></div>
          </div>
          <div class="price bonus">
            <div>ціна за купоном</div>
            <div><span>${item.bonusPrice}</span><sup>грн</sup></div>
          </div>
        </div>
      `;
      itemsDiv.innerHTML += itemHTML;
    });
  } else {
    console.log('Блок товарів не знайдено');
  }