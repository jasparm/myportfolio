const civs = ['Teddy Bull', 'Teddy Rough', 'Lincoln', 'Saladin Vizier', 'Saladin Sultan', 'Curtin', 'Montezuma', 'Hammurabi', 'Pedro', 'Basil', 'Theodora', 'Wilfrid', 'Qin Mandate', 'Qin Unifier', 'Kublai Chinese', 'Yongle', 'Wu Zetian', 'Poundmaker', 'Wilhelmina', 'Cleopatra Egypt', 'Cleopatra Ptolemaic', 'Ramses', 'Victoria Steam', 'Victoria Empire', 'Eleanor England', 'Lizzy', 'Menelik', 'Catherine Black', 'Catherine Magnificence', 'Eleanor French', 'Ambiorix', 'Tamar',
    'Barbarossa', 'Ludwig', 'Simon', 'Pericles', 'Gorgo', 'Matthias', 'Pachacuti', 'Gandhi', 'Chandragupta', 'Gitarja', 'Hojo', 'Tokugawa', 'Javayaman', 'Mvemba', 'Nzinga', 'Seondeok', 'Sejong', 'Alexander', 'Mansa Musa', 'Sundiata', 'Kupe', 'Lautaro', 'Lady Six Sky', 'Genghis', 'Kublai Mongol', 'Harald Konge', 'Harald Varangian', 'Amanitore', 'Suleiman Kanuni', 'Suleiman Muhtesem', 'Cyrus', 'Nader', 'Dido', 'Jadwiga', 'Joao', 'Trajan', 'Caesar', 'Peter', 'Rob the Bruce',
    'Tomyris', 'Phillip', 'Gilgamesh', 'Kristina', 'Ba Trieu', 'Shaka'];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayRandomCiv() {
    const randomCiv = civs[Math.floor(Math.random() * civs.length)];
    document.getElementById('result').textContent = randomCiv;
}

document.body.addEventListener('click', function (event) {
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;

    // Check if the click is in the right third of the screen
    if (clickX > (2 / 3) * screenWidth) {
        const seed = document.getElementById('seed').value;
        if (seed) {
            Math.seedrandom(seed); // Seed the random generator
            shuffle(civs); // Shuffle the civs array
            displayRandomCiv(); // Display a random civilization
        } else {
            alert("Please enter a seed!");
        }
    }
});