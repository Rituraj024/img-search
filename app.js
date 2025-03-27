const acesskey = "BCU5nowjJ12JSoc-3AfukEklcQNKcrP-bL58Nq4xLSE"
const form1 = document.querySelector("form");
const inp = document.getElementById("search-inp");
const btn = document.getElementsByClassName("search-result");
const btn2 = document.getElementsById("show-more")

let inpData = "";
let page = 1;

async function getImages() {
  let input = inp.value;
  let url = `https://api.unsplash.com/photos?page=${page}client_id=${acesskey}&query=${input}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  const result = data.result;

  if(page===1){
    btn.innerHTML = "";
  }
  result.map((result)=>{
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("search-res");
  })
}