let products = [
    {
        img : "https://static.wikia.nocookie.net/animeadventures/images/7/77/Brulo_Shiny_%28Pose%29.png/revision/latest?cb=20220905223737",
        description : "Brulo is a MythicalMythical unit based on Broly from the anime Dragon Ball. He is only obtainable through summons.",
        quote : "KAAAAKAAAAROOOOTTTTT",
        price : "1350$",
        id : 1
    },
    {
        img : "https://static.wikia.nocookie.net/animeadventures/images/7/77/Brulo_Shiny_%28Pose%29.png/revision/latest?cb=20220905223737",
        description : "Brulo is a MythicalMythical unit based on Broly from the anime Dragon Ball. He is only obtainable through summons.",
        quote : "KAAAAKAAAAROOOOTTTTT",
        price : "1350$",
        id : 2
    },
    {
        img : "https://static.wikia.nocookie.net/animeadventures/images/7/77/Brulo_Shiny_%28Pose%29.png/revision/latest?cb=20220905223737",
        description : "Brulo is a MythicalMythical unit based on Broly from the anime Dragon Ball. He is only obtainable through summons.",
        quote : "KAAAAKAAAAROOOOTTTTT",
        price : "1350$",
        id : 3
    }
]
let showProduct = () => {
    if (products.length==0) {
        console.log ("ko co sp")
    }
    else {
               function addProduct2(data) {
                  var _lackin = document.querySelector(".lackin");
                  _lackin.innerHTML = "";
                  if(_lackin) {
                      for(var item of data) {
                          _lackin.innerHTML += `
                          <a href="">
                            <h1>${item.description}</h1
                            <p>${item.quote}</p>           
                            <img src="${item.img}" alt="">
                            <p>${item.price}</p>
                          </a>

                          `;
                      }
                  }
               }
               addProduct2(products);
    }
}

let addProduct = () => {}

let detailProduct = () => {
    
}

