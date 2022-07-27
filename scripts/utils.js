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

export function switchBackgroundColor() {
    /*
        Check if background color is present in the localStorage
        If present, then set it as background of body and of the bg-switcher button.

        else on clicking the bg-switcher button, get index data property of the button and change background color to index+1 if index < colors.length else index = 0;
    */
}
