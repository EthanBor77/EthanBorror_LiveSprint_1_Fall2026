(function () {
  const catImage = document.getElementById("cat-image");
  const dogImage = document.getElementById("dog-image");
  const cowImage = document.getElementById("cow-image");

  const revealCatButton = document.getElementById("reveal-cat");
  const revealDogButton = document.getElementById("reveal-dog");
  const revealCowButton = document.getElementById("reveal-cow");

  const hideCatButton = document.getElementById("hide-cat");
  const hideDogButton = document.getElementById("hide-dog");
  const hideCowButton = document.getElementById("hide-cow");

  revealCatButton.addEventListener("click", () => {
    catImage.style.display = "flex";
  });

  hideCatButton.addEventListener("click", () => {
    catImage.style.display = "none";
  });

  revealDogButton.addEventListener("click", () => {
    dogImage.style.display = "flex";
  });

  hideDogButton.addEventListener("click", () => {
    dogImage.style.display = "none";
  });

  revealCowButton.addEventListener("click", () => {
    cowImage.style.display = "flex";
  });

  hideCowButton.addEventListener("click", () => {
    cowImage.style.display = "none";
  });
})();
