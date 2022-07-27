import { fetchAndUpdateProjectsData } from "./projects.js";
import { fetchAndUpdateSkillsData } from "./skills.js";
import { hideLoadingScreen } from "./utils.js";

window.addEventListener("load", async () => {
    const loadingScreen = document.querySelector(".loading-screen");
    const bgSwitcherBtn = document.querySelector(".bg-switcher");
    const colors = ["#000000", "#300A24", "#222222", "#002b36"];

    if (localStorage.getItem("bg-color")) {
        const bgColor = localStorage.getItem("bg-color");
        document.body.style.backgroundColor = bgColor;
        bgSwitcherBtn.style.backgroundColor = bgColor;
        loadingScreen.style.backgroundColor = bgColor;
        bgSwitcherBtn.dataset.index = colors.findIndex((val) => bgColor);
    } else {
        bgSwitcherBtn.style.backgroundColor = "black";
        bgSwitcherBtn.dataset.index = "0";
    }

    await fetchAndUpdateSkillsData();
    await fetchAndUpdateProjectsData();

    setTimeout(() => {
        hideLoadingScreen();
    }, 600);

    // Adding code to change background on clickign button

    bgSwitcherBtn.addEventListener("click", function () {
        const colorIndex = this.dataset.index;

        const nextColorIndex =
            +colorIndex + 1 < colors.length ? +colorIndex + 1 : 0;
        document.body.style.backgroundColor = this.style.backgroundColor =
            colors[nextColorIndex];
        this.dataset.index = nextColorIndex;

        console.log(nextColorIndex, +colorIndex);
        localStorage.setItem("bg-color", colors[nextColorIndex]);
    });
});
