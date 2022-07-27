export async function fetchAndParseJSON(url) {
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

export function hideLoadingScreen() {
    document.body.classList.remove("oy-hidden");
    document.querySelector("#root").style.display = "flex";
    document.querySelector(".loading-screen").style.display = "none";
}
