import { fetchAndUpdateProjectsData } from "./projects.js";
import { fetchAndUpdateSkillsData } from "./skills.js";

window.addEventListener("load", async () => {
    await fetchAndUpdateSkillsData();
    await fetchAndUpdateProjectsData();
});
