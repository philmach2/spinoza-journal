const myJournal = [];

document
  .getElementById("addEntryBtn")
  .addEventListener("click", addEntryToJournal);

function Entry(inspired, happiness, comfort) {
  this.inspired = inspired;
  this.happiness = happiness;
  this.comfort = comfort;
}

function addEntryToJournal() {
  const inspired = document.getElementById("inspired").value;
  const happiness = document.getElementById("happiness").value;
  const comfort = document.getElementById("comfort").value;

  const newEntry = new Entry(inspired, happiness, comfort);
  myJournal.push(newEntry);

  displayEntries();
}

function displayEntries() {
  const journalContainer = document.querySelector("#journalContainer");
  journalContainer.innerHTML = "";

  myJournal.forEach((entry, index) => {
    const page = document.createElement("div");
    page.classList.add("page");

    page.innerHTML = `
    <p>${entry.inspired}</p> 
    <p>${entry.happiness}</p> 
    <p>${entry.comfort}</p>
    `;

    journalContainer.appendChild(page);
  });
}

// Initial entries for demo
const day01 = new Entry(
  "What inspired you today?",
  "What brought you happiness today?",
  "What brought you deep peace and comfort today?"
);
const day02 = new Entry(
  "Today a bird inspired me to fly.",
  "Today a rabbit brought me happiness.",
  "Today a toad brought me deep peace and comfort."
);
const day03 = new Entry(
  "Seeing my efforts at the gym in the mirror.",
  "Reading a poem by Wordsworth.",
  "Cuddling with my girlfriend."
);

// Display inital entries for demo
myJournal.push(day01, day02, day03);
displayEntries();
