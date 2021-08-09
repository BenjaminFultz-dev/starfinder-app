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
                firstLevel: document.querySelector("#firstLevel").value,
                sixthLevel: document.querySelector("#sixthLevel").value,
                twelfthLevel: document.querySelector("#twelfthLevel").value,
                eighteenthLevel: document.querySelector("#eighteenthLevel").value   
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