const createForm = document.querySelector('#skillForm');

createForm.addEventListener('submit', createSkill);

async function createSkill(e) {
    e.preventDefault()
    try {
        const response = await fetch('/skill/createSkill', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                skillName: document.querySelector('#skillName').value,
                skillAbility: document.querySelector('#skillAbility').value,
                skillDescription: document.querySelector('#skillDescription').value,
                trainedOnly: document.querySelector('#trainedOnly').checked,
                armorCheckPenalty: document.querySelector('#armorCheckPenalty').checked      
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

