console.log("index");

const streakCount = 7;
const imagesCount = 1200;
let imgA = document.getElementById("imgA");
let imgB = document.getElementById("imgB");
let imgAcon = document.getElementById("imgAcon");
let imgBcon = document.getElementById("imgBcon");
let progressBar = document.getElementById("progressBar");
let progressText = document.getElementById("progressText");

let preChosen = "-";

let imgANumber = 1;
let imgBNumber = 2;
let progress = 0;
let gamefinished = false;

let unUsedImages = [];

function initilization() {
  unUsedImages = [];
  for (let i = 2; i < imagesCount; i++) {
    unUsedImages.push(i + 1);
    2;
  }

  imgANumber = randomChoice(unUsedImages);
  imgBNumber = randomChoice(unUsedImages);
  unUsedImages = unUsedImages.filter((n) => n != imgBNumber && n != imgANumber);

  progressBar.style = "width: 0%";
  progressBar.setAttribute("aria-valuenow", "0");
  progressText.innerText = `${progress}/${streakCount}`;

  imgA.setAttribute("src", `./../images/img-${imgANumber}.jpg`);
  imgB.setAttribute("src", `./../images/img-${imgBNumber}.jpg`);
  imgA.addEventListener("click", () => {
    clickOnPicture("A");
  });
  imgB.addEventListener("click", () => {
    clickOnPicture("B");
  });
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

  if (AorB == "A") {
    imgBNumber = newImageNumber;
    imgB.setAttribute("src", `./../images/img-${imgBNumber}.jpg`);
  } else if (AorB == "B") {
    imgANumber = newImageNumber;
    imgA.setAttribute("src", `./../images/img-${imgANumber}.jpg`);
  }
  if (preChosen == AorB || progress == 0) {
    progress += 1;
  } else {
    progress = 0;
  }
  preChosen = AorB;

  progressBar.style = `width: ${(progress * 100) / streakCount}%`;
  progressBar.setAttribute("aria-valuenow", progress.toString());
  progressText.innerText = `${progress}/${streakCount}`;
  if (progress >= streakCount) {
    gameFinished(AorB);
  }
}

function gameFinished(AorB) {
  gamefinished = true;
  console.log("finish");
  if (AorB == "A") {
    imgAcon.className = "col-md-12 col-sm-12 mt-4";
    imgBcon.style = "display: none;";
  }
  if (AorB == "B") {
    imgBcon.className = "col-md-12 col-sm-12 mt-4";
    imgAcon.style = "display: none;";
  }
  progressText.innerText = "This one is the hottest!";
}
