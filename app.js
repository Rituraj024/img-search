const acesskey = "BCU5nowjJ12JSoc-3AfukEklcQNKcrP-bL58Nq4xLSE";
const form1 = document.querySelector("form");
const inp = document.getElementById("search-inp");
const btn = document.getElementsByClassName("search-result")[0]; // Accessing the first element
const btn2 = document.getElementById("show-more");

let inpData = "";
let page = 1;

async function getImages() {
  let input = inp.value;
  let url = `https://api.unsplash.com/photos?page=${page}&client_id=${acesskey}&query=${input}`; 
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  // If the data array is empty, exit early
  //if (!data || data.length === 0) return;

  // Remove old results if it's the first page
  if (page === 1) {
    btn.innerHTML = "";
  }

  // Loop through the results and display images
  data.forEach((result) => {
    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("search-res");
    const image = document.createElement("img");
    image.src = result.urls.regular;
    image.alt = result.alt_description;
    imgWrapper.appendChild(image);
    btn.appendChild(imgWrapper);
  });

  page++;

  // Show "Show More" button after the first page
  if (page > 1) {
    btn2.style.display = "block";
  }
}

// Handle form submission
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1; // Reset the page to 1 on new search
  getImages();
  inp.value = ""; // Clear the input field after submission
});
