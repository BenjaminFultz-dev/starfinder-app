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
                traitOne: document.querySelector('#traitOne').value,
                traitTwo: document.querySelector('#traitTwo').value,
                traitThree: document.querySelector('#traitThree').value,
                traitFour: document.querySelector('#traitFour').value,
                alternateAbilityAdjustmentOne: document.querySelector('#alternateAbilityAdjustmentOne').value,
                alternateAbilityAdjustmentTwo: document.querySelector('#alternateAbilityAdjustmentTwo').value,
                alternateAbilityAdjustmentThree: document.querySelector('#alternateAbilityAdjustmentThree').value,
                alternateAbilityAdjustmentFour: document.querySelector('#alternateAbilityAdjustmentFour').value,
                alternateAbilityAdjustmentFive: document.querySelector('#alternateAbilityAdjustmentFive').value,
                alternateTraitOne: document.querySelector('#alternateTraitOne').value,
                alternateTraitTwo: document.querySelector('#alternateTraitTwo').value,
                alternateTraitThree: document.querySelector('#alternateTraitThree').value,
                alternateTraitFour: document.querySelector('#alternateTraitFour').value,
                alternateTraitFive: document.querySelector('#alternateTraitFive').value,
                alternateTraitSix: document.querySelector('#alternateTraitSix').value,
                alternateTraitSeven: document.querySelector('#alternateTraitSeven').value,
                alternateTraitEight: document.querySelector('#alternateTraitEight').value,
                alternateTraitNine: document.querySelector('#alternateTraitNine').value,
                alternateTraitTen: document.querySelector('#alternateTraitTen').value   
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