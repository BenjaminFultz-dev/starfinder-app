const createForm = document.querySelector("#featForm");

createForm.addEventListener('submit', createFeat);

async function createFeat(e) {
    e.preventDefault()
    try {
        const response = await fetch('/feat/createFeat', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                featName: document.querySelector("#featName").value,
                featPrerequisite: document.querySelector("#featPrerequisite").value,
                featDescription: document.querySelector("#featDescription").value,
                combatFeat: document.querySelector("#combatFeat").checked     
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