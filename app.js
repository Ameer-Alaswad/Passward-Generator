const input = document.querySelector("input");
const button = document.querySelector("button");
const image = document.querySelector("img");
const body = document.querySelector("body");
const contentContainer = document.querySelector("#content-container");
const labelButtonContainer = document.querySelector("#label-button-container");
contentContainer.style.height = "100%";
labelButtonContainer.style.width = "330px";
labelButtonContainer.style.height = "100px";
labelButtonContainer.style.borderRadius = "5%";
labelButtonContainer.style.backgroundColor = "white";
contentContainer.style.display = "flex";
contentContainer.style.justifyContent = "space-around";
contentContainer.style.alignItems = "center";
labelButtonContainer.style.display = "flex";
labelButtonContainer.style.flexDirection = "column";
labelButtonContainer.style.justifyContent = "space-around";
labelButtonContainer.style.alignItems = "center";

body.style.backgroundColor = "grey";
body.style.height = "100vh";
body.style.margin = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "space-between";
button.style.width = "300px";
button.style.height = "40px";
button.style.backgroundColor = "#263666";
button.style.color = "white";
button.style.cursor = "pointer";
input.style.width = "292px";
input.style.height = "23px";
image.style.width = "100%";
image.style.height = "70%";
button.addEventListener("click", () => {
  input.value = passwordGenerator();
});

function passwordGenerator() {
  let passLength = 20,
    password =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.",
    result = "";
  for (let i = 0; i < passLength; ++i) {
    result += password.charAt(Math.floor(Math.random() * password.length));
  }
  return result;
}
