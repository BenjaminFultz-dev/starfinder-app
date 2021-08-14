const createForm = document.querySelector("#themeForm");

createForm.addEventListener('submit', createTheme);

async function createTheme(e) {
    e.preventDefault()
    try {
        const response = await fetch('/theme/createTheme', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                themeName: document.querySelector("#themeName").value,
                themeAbility: document.querySelector("#themeAbility").value,
                themeDescription: document.querySelector("#themeDescription").value,
                firstLevel: {
                    name: document.querySelector("#firstLevelName").value,
                    description: document.querySelector("firstLevelDescription").value,
                },
                sixthLevel: {
                    name: document.querySelector("#sixthLevelName").value,
                    description: document.querySelector("sixthLevelDescription").value,
                }, 
                twelfthLevel: {
                    name: document.querySelector("#twelfthLevelName").value,
                    description: document.querySelector("twelfthLevelDescription").value,
                },
                eighteenthLevel: {
                    name: document.querySelector("#eighteenthLevelName").value,
                    description: document.querySelector("eighteenthLevelDescription").value,
                }
            })
        })
        const data = await response.json()
        console.log(data)
        createForm.reset()
    } catch(err) {
        console.log(err)
    }
    location.reload()
}