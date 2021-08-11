const traits = [];
const traitButton = document.querySelector('#addTrait');
traitButton.addEventListener('click', addTrait);

const alternateAbilities = [];
const alternateAbilityButton = document.querySelector('#addAlternateAbility');
alternateAbilityButton.addEventListener('click', addAlternateAbility);

const alternateTraits = [];
const alternateTraitButton = document.querySelector('#addAlternateTrait');
alternateTraitButton.addEventListener('click', addAlternateTrait);

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

function addAlternateAbility() {
    let nameElement = document.querySelector('#alternateAbilityName');
    let descriptionElement = document.querySelector('#alternateAbilityDescription');

    const alternateAbility = {
        name: nameElement.value,
        description: descriptionElement.value
    }
    alternateAbilities.push(alternateAbility)
    nameElement.value = ""
    descriptionElement.value = ""
    console.log(alternateAbilities)
    const listItem = document.createElement("li")
    listItem.innerHTML = "<strong>" + alternateAbility.name + "</strong> - " + alternateAbility.description
    document.querySelector("#alternateAbilityList").appendChild(listItem)
}

function addAlternateTrait() {
    let nameElement = document.querySelector('#alternateTraitName');
    let descriptionElement = document.querySelector('#alternateTraitDescription');

    const alternateTrait = {
        name: nameElement.value,
        description: descriptionElement.value
    }
    alternateTraits.push(alternateTrait)
    nameElement.value = ""
    descriptionElement.value = ""
    console.log(alternateTraits)
    const listItem = document.createElement("li")
    listItem.innerHTML = "<strong>" + alternateTrait.name + "</strong> - " + alternateTrait.description
    document.querySelector("#alternateTraitList").appendChild(listItem)
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
                traits: traits,
                alternateAbilityAdjustments: alternateAbilities,
                alternateTraits: alternateTraits
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