fetch('https://dummyjson.com/product')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
   let myproducts = data.products;
    showinMainFrame(myproducts);
  });

let mainFrame = document.getElementById("main-frame");
let searchBar = document.getElementById("search-bar");
let rang=document.getElementById("r")
 let button=document.getElementById("btn");
//  let music=document.getElementById("music");
let flag;


// ========css=======
searchBar.classList.add("bg-gray-300","italic","m-7");
rang.classList.add("bg-gray-300","italic","m-7");
 button.classList.add("h-12","w-25","bg-blue-300","rounded","m-20");


 //====button==--
 button.addEventListener("click",function(){
    if(searchid||searchrang){}
    else{
     if(flag){
    button.innerHTML="According to price";
    button.classList.remove("bg-green-300")
    button.classList.add("bg-blue-300");
     myproducts.sort((a, b) => a.id- b.id);
      showinMainFrame(myproducts);
    flag=null;}
        // ===PRICE=======
      else{
         button.innerHTML="According to ID";
        button.classList.remove("bg-blue-300");
        button.classList.add("bg-green-300");
         myproducts.sort((a, b) => a.price - b.price);
      showinMainFrame(myproducts);
      flag=1;
      }
    }
 });

 //===search ID====
 let searchid;
searchBar.addEventListener("input",function(){
  searchid = searchBar.value

  let searchProduct = myproducts.find((product) =>product.id ==searchid);

    if (searchProduct) {
    showinMainFrame([searchProduct]);
  } else {
    showinMainFrame(myproducts);
  }
});
//=======search Rang====
let searchrang;
rang.addEventListener("input",function(){
  searchrang = rang.value

  let searchProductrang = myproducts.filter((product) =>product.price <= searchrang);

    if (searchProductrang.length > 0) {
    showinMainFrame(searchProductrang);
  } else {
    showinMainFrame(myproducts);
  }
});


//mainfram
function showinMainFrame(products) {
  mainFrame.innerHTML ="";

  products.forEach((pro) => {
   mainFrame.innerHTML +=`
<div class="boarder">
    ${pro.title} <br>
   ₹${pro.price} <br>
   id=${pro.id} <br>
   <button onclick="buyMe('${pro.title}")>BUY MY</button>
</div>`
  });
}
function buyMe(item) {
  // music.play();
  alert(`Are you sour to buy: ${item}`);
}