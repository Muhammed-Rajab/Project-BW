import { fetchAndUpdateProjectsData } from "./projects.js";

window.addEventListener("load", async () => {
    await fetchAndUpdateProjectsData();
});
