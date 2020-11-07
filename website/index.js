console.log("index");

let imgA = document.getElementById("imgA");
let imgB = document.getElementById("imgB");
let progressBar = document.getElementById("progressBar");

let imgANumber = 1;
let imgBNumber = 2;
let progress = 0;
let gamefinished = false;

let unUsedImages = [];

function initilization() {
  progressBar.style = "width: 0%";
  progressBar.setAttribute("aria-valuenow", "0");

  imgA.setAttribute("src", `./../images2/img-${imgANumber}.jpg`);
  imgB.setAttribute("src", `./../images2/img-${imgBNumber}.jpg`);
  imgA.addEventListener("click", () => {
    clickOnPicture("A");
  });
  imgB.addEventListener("click", () => {
    clickOnPicture("B");
  });
  unUsedImages = [];
  for (let i = 2; i < 32; i++) {
    unUsedImages.push(i + 1);
    2;
  }

  console.log(unUsedImages);
}
initilization();

function randomRangeInt(min, max) {
  return Math.floor(min + (max - min) * Math.random());
}

function randomChoice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function clickOnPicture(AorB) {
  if (gamefinished) return;

  //console.log(AorB);
  newImageNumber = randomChoice(unUsedImages);
  unUsedImages = unUsedImages.filter((n) => n != newImageNumber);
  console.log(unUsedImages);

  if (AorB == "A") {
    imgBNumber = newImageNumber;
    imgB.setAttribute("src", `./../images2/img-${imgBNumber}.jpg`);
  } else if (AorB == "B") {
    imgANumber = newImageNumber;
    imgA.setAttribute("src", `./../images2/img-${imgANumber}.jpg`);
  }

  progress += 1;
  progressBar.style = `width: ${progress * 5}%`;
  progressBar.setAttribute("aria-valuenow", progress.toString());
  if (progress > 20) {
    gameFinished();
  }
}

function gameFinished() {
  gamefinished = true;
  console.log("finish");
}
