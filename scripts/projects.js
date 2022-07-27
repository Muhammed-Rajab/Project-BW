import { fetchAndParseJSON } from "./utils.js";

export function generateProjectCard(project) {
    return `<div class="d-flex fd-col project-card">
    <h1 class="project-title">${project.title}</h1>
    <div class="d-flex project-tags">
        ${project.tags
            .map((tag) => `<p class="project-tag">#${tag}</p>`)
            .join("\n")}
    </div>
    <p class="project-desc">${project.desc}</p>
    <div class="d-flex project-links">
        <a
            href="${project.liveDemoUrl}"
            class="project-link"
            target="_blank"
            >Live demo</a
        >
        <a
            href="${project.sourceCodeUrl}"
            class="project-link"
            target="_blank"
            >Source code</a
        >
    </div>
</div>`;
}

export async function fetchAndUpdateProjectsData() {
    const PROJECTS_URL =
        "https://raw.githubusercontent.com/Muhammed-Rajab/Muhammed-Rajab.github.io/master/data/projects.json";
    const projectsList = document.querySelector(".projects-list");
    const projectsData = await fetchAndParseJSON(PROJECTS_URL);

    const projectsCardHtml = projectsData
        .map((project) => generateProjectCard(project))
        .join("\n");
    setTimeout(() => {
        projectsList.innerHTML = projectsCardHtml;
    }, 100);
}
