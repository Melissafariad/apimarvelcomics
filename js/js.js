const ul = document.querySelector('[data-js="marvel"]');
const key = "?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b";
let imgHero = document.getElementById('imgHero');
let nameHero = document.getElementById('nameHero');

function chamada() {
    let Display = document.getElementById('filter').value;
    console.log("aqui: " + Display);
    fetch("https://gateway.marvel.com:443/v1/public/comics/" + Display + "/characters" + key)
        .then(data => {
            return data.json();
        })
        .then(hero => {
            if (hero.data.results.length > 0) {
                const firstHero = hero.data.results[0];
                const heroName = firstHero.name;
                const heroThumbnail = firstHero.thumbnail.path + '.' + firstHero.thumbnail.extension;

                nameHero.textContent = heroName;

                imgHero.src = heroThumbnail;
                imgHero.alt = heroName;
            } else {
                console.log('Nenhum herói encontrado para o filtro atual.');
                imgHero.src = '';
                imgHero.alt = '';
            }
        })
}