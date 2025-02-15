const civs = [
    "Teddy Bull",
    "Teddy Rough",
    "Lincoln",
    "Saladin Vizier",
    "Saladin Sultan",
    "Curtin",
    "Montezuma",
    "Hammurabi",
    "Pedro",
    "Basil",
    "Theodora",
    "Wilfrid",
    "Qin Mandate",
    "Qin Unifier",
    "Kublai Chinese",
    "Yongle",
    "Wu Zetian",
    "Poundmaker",
    "Wilhelmina",
    "Cleopatra Egypt",
    "Cleopatra Ptolemaic",
    "Ramses",
    "Victoria Steam",
    "Victoria Empire",
    "Eleanor England",
    "Lizzy",
    "Menelik",
    "Catherine Black",
    "Catherine Magnificence",
    "Eleanor French",
    "Ambiorix",
    "Tamar",
    "Barbarossa",
    "Ludwig",
    "Simon",
    "Pericles",
    "Gorgo",
    "Matthias",
    "Pachacuti",
    "Gandhi",
    "Chandragupta",
    "Gitarja",
    "Hojo",
    "Tokugawa",
    "Javayaman",
    "Mvemba",
    "Nzinga",
    "Seondeok",
    "Sejong",
    "Alexander",
    "Mansa Musa",
    "Sundiata",
    "Kupe",
    "Lautaro",
    "Lady Six Sky",
    "Genghis",
    "Kublai Mongol",
    "Harald Konge",
    "Harald Varangian",
    "Amanitore",
    "Suleiman Kanuni",
    "Suleiman Muhtesem",
    "Cyrus",
    "Nader",
    "Dido",
    "Jadwiga",
    "Joao",
    "Trajan",
    "Caesar",
    "Peter",
    "Rob the Bruce",
    "Tomyris",
    "Phillip",
    "Gilgamesh",
    "Kristina",
    "Ba Trieu",
    "Shaka",
];
let currentCivs = civs.slice();

document.getElementById("slotarm").addEventListener("click", (event) => {
    event.target.style.transform = "scaleY(0)";
    setTimeout(() => {
        let randomCiv;
        if (currentCivs.length === 0) {
            randomCiv = "NO CIVS LEFT";
        } else {
            randomCiv = currentCivs[Math.floor(Math.random() * currentCivs.length)];
            currentCivs.pop(randomCiv);
        }
        document.getElementById("result").textContent = randomCiv;
    }, 250);

    setTimeout(() => {
        event.target.style.transform = "scaleY(1)";
    }, 500);
});

document.getElementById("seed").addEventListener("input", (event) => {
    currentCivs = civs.slice();
    Math.seedrandom(event.target.value + "\0");
});
