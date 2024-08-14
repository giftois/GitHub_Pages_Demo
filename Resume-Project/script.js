
const mainButton = document.getElementById("m-button");
const aboutMe = document.getElementById("aboutMeBox");
const giftois = document.getElementById("barName");

const displayAbout = () => {
    aboutMe.style.cssText = `
    display: inline-block;
    `;
}

mainButton.addEventListener("click", displayAbout);
