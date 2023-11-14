const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/entries', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            inspiration: 'You were inspired.',
            happiness: 'You were happy.',
            comfort: 'You were comfortable.',
        }),
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
    .catch(error => console.error(error))
})

const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
    fetch('/entries', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            inspiration: 'You were inspired.'
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(data => {
        window.location.reload()
    })
    .then(response => {
        if (response === 'No entry to delete') {
            messageDiv.textContent = 'No Separate Entry to delete'
          } else {
            window.location.reload(true)
          }
    })
    .catch(error => console.error(error))
})

// const myJournal = [];


// function Entry(inspired,happiness,comfort) {
//     this.inspiration = inspiration;
//     this.happiness = happiness;
//     this.comfort = comfort;
//     this.day = function() {
//         return `This day's entry: \n
//         ${inspired} \n            
//         ${happiness} \n
//         ${comfort}`
//     };
// };

// function addJournalEntry() {
//     let newEntry = new Entry;

//     newEntry.inspiration = inspiration.value;
//     newEntry.happiness = happiness.value;
//     newEntry.comfort = comfort.value;

//     myJournal.push(newEntry);
// };