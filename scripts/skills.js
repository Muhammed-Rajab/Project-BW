import { fetchAndParseJSON } from "./utils.js";

export function generateSkillList(title, skills) {
    return `<div class="d-flex fd-col skill-list">
    <span class="skill-title">${title}</span>
    <div class="d-flex fd-row skills">
        ${skills
            .map(
                (sk) =>
                    `<div style="border: 4px solid ${sk.color}; color: ${
                        sk.color
                    };" class="skill-js">${sk.title.toUpperCase()}</div>`
            )
            .join("\n\t\t")}
    </div>
</div>`;
}

export async function fetchAndUpdateSkillsData() {
    const SKILLS_URL =
        "https://raw.githubusercontent.com/Muhammed-Rajab/Muhammed-Rajab.github.io/master/data/skills.json";
    const skillListContainer = document.querySelector(".skill-lists-container");
    const skillsData = await fetchAndParseJSON(SKILLS_URL);

    skillListsHtml = Object.keys(skillsData)
        .map((key) => generateSkillList(key, skillsData[key]))
        .join("\n\n");
    setTimeout(() => {
        skillListContainer.innerHTML = skillListsHtml;
    }, 250);
}
