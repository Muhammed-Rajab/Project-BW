import { fetchAndUpdateProjectsData } from "./projects.js";
import { fetchAndUpdateSkillsData } from "./skills.js";
import { hideLoadingScreen } from "./utils.js";

window.addEventListener("load", async () => {
    await fetchAndUpdateSkillsData();
    await fetchAndUpdateProjectsData();

    setTimeout(() => {
        hideLoadingScreen();
    }, 600);
});
