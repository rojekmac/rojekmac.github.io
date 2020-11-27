const memes = document.querySelector("#memes");
const image = document.querySelector("#image");
const generator = document.querySelector("#generator");
let cache = null;

const dodawanieMema = (url) => {
  const newLI = document.createElement("li");
  newLI.textContent = url;
  memes.appendChild(newLI);
};

const getApiMemes = async () => {
  if (cache != null) {
    console.log("cache data return no api call");
    console.log(cache);
    return cache;
  }

  console.log("cache data not available. Make api call");
  const response = await window.axios.get("https://api.imgflip.com/get_memes");

  cache = response.data.data.memes;

  return cache;
};

const generateMeme = async () => {
    const m = await getApiMemes();
  
    const rand = Math.floor(Math.random() * 99);
    dodawanieMema(m[rand].url);
    image.src = m[rand].url;
  };
  
  generator.addEventListener("click", generateMeme);
  