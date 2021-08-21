const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector(".save-confirmed");
const loader = document.querySelector(".loader");

const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

function updateDOM() {
  resultsArray.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    
        <a href="${result.hdurl}" title="View full image" target="_blank">
            <img
              src="${result.url}"
              alt="NASA Picture of the day"
              class="card-img-top"
            />
          </a>
                   
          
          <div class="card-body">
            <h5 class="card-title">${result.title}</h5>

            <p class="clickable">Add to favorites</p>
            
            <p class="card-text">
            ${result.explanation}
            </p>

            <small class="text-muted">
              <strong>${result.date}</strong>
              <span>${
                result.copyright ? result.copyright : " Copyright Free"
              } </span>
            </small>

          </div>
        
    `;
    console.log(card);
    imagesContainer.append(card);
  });
}

async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    updateDOM();
  } catch (error) {}
}

getNasaPictures();
