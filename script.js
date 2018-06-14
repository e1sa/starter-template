var likes = 0;
var fancy = 1;
var icon = document.getElementById('icon');
var counter = document.getElementById('counter');
var star = document.getElementById('star');
var oppose = document.getElementById('oppose');
var views = 0;
var prospect = 1;

function updateLikes() {
  if (icon.dataset.like === "false") {
    likes = likes + 1;
    icon.src = "fill.png";
    icon.dataset.like = "true";
    counter.innerHTML = likes;

  } else {
    likes = likes - 1;
    icon.src = "empty.png";
    icon.dataset.like = "false";
    counter.innerHTML = likes;

  }

}
function updatestar() {
  if (star.dataset.like === "false") {
    views = views + 1;
    star.src = "fill.png";
    icon.dataset.like = "true";
    oppose.innerHTML = likes;

  } else {
    views = views - 1;
    star.src = "empty.png";
    star.dataset.like = "false";
    oppose.innerHTML = ;

  }

}
