const createForm = document.querySelector("#spellForm");

createForm.addEventListener('submit', createSpell);

async function createSpell(e) {
    e.preventDefault()
    try {
        const response = await fetch('/spell/createSpell', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                spellName: document.querySelector("#spellName").value,
                spellClass: document.querySelector("#spellClass").value,
                spellLevel: document.querySelector("#spellLevel").value,
                spellDescription: document.querySelector("#spellDescription").value,
                spellNotes: document.querySelector("#spellNotes").value    
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