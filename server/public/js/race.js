const traits = []
const traitButton = document.querySelector("#addTrait");
traitButton.addEventListener('click', addTrait);

function addTrait() {
    let nameElement = document.querySelector('#traitName');
    let descriptionElement = document.querySelector('#traitDescription');

    const trait = {
        name: nameElement.value,
        description: descriptionElement.value
    }
    traits.push(trait)
    nameElement.value = ""
    descriptionElement.value = ""
    console.log(traits)
    const listItem = document.createElement("li")
    listItem.innerHTML = "<strong>" + trait.name + "</strong> - " + trait.description
    document.querySelector("#traitList").appendChild(listItem)
}







const createForm = document.querySelector("#raceForm");

createForm.addEventListener('submit', createRace);

async function createRace(e) {
    e.preventDefault()
    try {
        const response = await fetch('/race/createRace', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                raceName: document.querySelector('#raceName').value,
                abilityModifiers: document.querySelector('#abilityModifiers').value,
                hitPoints: document.querySelector('#hitPoints').value,
                traits: traits
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