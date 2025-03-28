const acesskey = "BCU5nowjJ12JSoc-3AfukEklcQNKcrP-bL58Nq4xLSE"
const form1 = document.querySelector("form");
const inp = document.getElementById("search-inp");
const btn = document.getElementsByClassName("search-result");
const btn2 = document.getElementById("show-more");

let inpData = "";
let page = 1;

async function getImages() {
  let input = inp.value;
  let url = `https://api.unsplash.com/photos?page=${page}client_id=${acesskey}&query=${input}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  //const result = data.result;

  if(page===1){
    btn.innerHTML = "";
  }
  result.map((result)=>{
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("search-res");
    const image = document.createElement("img");
    image.src = result.urls.regular;
    image.alt = data.alt_description; 
    imgWrapper.appendChild(image);
    btn.appendChild(imgWrapper);
  })
  page++;
  if(page>1){
    btn2.style.display = "block";
  }
}
form1.addEventListener("submit", (e)=>{
  e.preventDefault();
  getImages();
  inp.value = "";
})
