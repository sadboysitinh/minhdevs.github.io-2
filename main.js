// PLay Music
var meddiaPLayer = document.querySelector("audio");
var playMusic = document.querySelector(".play-music");

playMusic.onclick = () => {
  meddiaPLayer.paused ? meddiaPLayer.play() : meddiaPLayer.pause();
};
// Animation progressbar
var progressbar = document.querySelectorAll('[role="progressbar"]');

const progressAnimation = (element) => {
  let i = 0;
  let WS = element.getAttribute("value");
  let Animations;
  Animations = setInterval(() => {
    // element.innerText = i + "%";
    element.style.width = i + "%";
    i >= Number(WS) ? clearInterval(Animations) : i++;
  }, 5);
};

for (var i = 0; i < progressbar.length; i++) {
  progressAnimation(progressbar[i]);
}

// Coppy Payment information
var items = document.querySelectorAll(
  ".card.border-0.rounded-3.shadow.text-center.p-2.m-2"
);

itemsLength = items.length;

for (var i = 0; i < itemsLength; i++) {
  items[i].onclick = (e) => {
    copyTextToClipboard(e);
  };
}

async function copyTextToClipboard(text) {
  text = text.path[1].childNodes[4].innerText;
  try {
    await navigator.clipboard.writeText(text);
    alert("Text copied to clipboard");
  } catch (err) {}
}

// Scroll page
function scrollPage(height) {
  window.scrollTo(0, height);
}

// scrollPage(200); //// ccc
