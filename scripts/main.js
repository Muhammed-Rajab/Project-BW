async function fetchAndParseJSON(url) {
    try {
        const res = await fetch(url);

        if (res.status === 404) {
            throw new Error("Can't fetch data from GitHub");
        }
        const data = await res.json();
        return data;
    } catch (e) {
        return { error: e.message };
    }
}

function generateProjectCard(project) {
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

async function fetchAndUpdateProjectsData() {
    const PROJECTS_URL =
        "https://raw.githubusercontent.com/Muhammed-Rajab/portfolio-data/master/projects.json";
    const projectsList = document.querySelector(".projects-list");
    const projectsData = await fetchAndParseJSON(PROJECTS_URL);

    projectsData.map((project) => {
        const projectCard = generateProjectCard(project);
        projectsList.insertAdjacentHTML("beforeend", projectCard);
    });
}

window.addEventListener("load", async () => {
    await fetchAndUpdateProjectsData();
});
