const myJournal = [];


function Entry(inspired,happiness,comfort) {
    this.inspiration = inspiration;
    this.happiness = happiness;
    this.comfort = comfort;
    this.day = function() {
        return `This day's entry: \n
        ${inspired} \n            
        ${happiness} \n
        ${comfort}`
    };
};

function addJournalEntry() {
    let newEntry = new Entry;

    newEntry.inspiration = inspiration.value;
    newEntry.happiness = happiness.value;
    newEntry.comfort = comfort.value;

    myJournal.push(newEntry);
};