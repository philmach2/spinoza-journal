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