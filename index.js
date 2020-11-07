const { promises: fs } = require("fs");
const axios = require("axios");

async function getImageBufferFromURL(url) {
  let imagedataResponse = await axios({
    url,
    method: "GET",
    responseType: "arraybuffer",
  });
  if (imagedataResponse && imagedataResponse.data) {
    let buffer = Buffer.from(imagedataResponse.data, "base64");
    return buffer;
  }
}
async function saveImageBufferToFile(buffer, imageFileName) {
  await fs.writeFile(`./images/${imageFileName}`, buffer);
}

picurl = "https://thispersondoesnotexist.com/image";

async function waitSecondRange(min, max) {
  let time = 1000 * (min + Math.random() * (max - min));
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, time);
  });
}

async function getImagesBisDerMarderKotzt(startindex, anzahl) {
  for (let i = startindex; i < startindex + anzahl; i++) {
    let filename = `img-${i}.jpg`;
    let buffer = await getImageBufferFromURL(picurl);
    saveImageBufferToFile(buffer, filename);
    console.log(
      `Got image from url ${picurl} and wrote to file ./images/${filename}`
    );
    await waitSecondRange(0.1, 0.3);
  }
}

getImagesBisDerMarderKotzt(1292, 10000);
