const progress = document.getElementById("progress");
const progressText = document.getElementById("progress-text");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const bottomTitle = document.getElementById("bottom-title");
const bottomText = document.getElementById("bottom-text");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const logo = document.getElementById("card-logo");
const cardImage = document.getElementById("card-image");
const cardPortions = document.getElementById("card-portions")

let currentActive = 1;

next.addEventListener("click", function(){
    currentActive++;

    if(currentActive > 5){
        currentActive = 5;
    }
    console.log(currentActive);
    update();
});

prev.addEventListener("click", () =>{
    currentActive--;

    if(currentActive <= 1){
        currentActive = 1;
    }
    console.log(currentActive);
    update();
});

function update(){
    if (currentActive === 1){
        prev.disabled = true;
        progress.style.width = "1%";
        logo.style.display = "block";
        progressText.textContent = "1/5: Bienvenido a Veggeats";
        cardTitle.textContent = "Bienvenido al futuro de la alimentación";
        cardText.textContent = "Consigue reducir tu consumo de carne, conocer comida exquisita vegetariana o hacer que tu camino hacia el veganismo sea más placentero."
        bottomTitle.style.display = "block";
        bottomText.textContent = "Personas usando Veggeats ahora"
        cardImage.style.display = "none";
    } else if (currentActive === 2){
        prev.disabled = false;
        progress.style.width = "25%";
        logo.style.display = "none";
        progressText.textContent = "2/5: Beneficios";
        cardTitle.textContent = "Menos Carne, Mejor Salud";
        cardText.textContent = "Tener menos probabilidad de tener diabetes tipo 2 y desarrollar cáncer, además de ayudar a reducir tu impacto en el cambio climático son solo algunos de los beneficios de iniciar una dieta vegetariana";
        cardImage.style.display = "block";        
        bottomTitle.style.display = "none";
        bottomText.textContent = "- World Health Organization. (2015, 2 noviembre)."
        cardPortions.style.display = "none";
    } else if (currentActive === 3){
        prev.disabled = false;
        progress.style.width = "50%";
        logo.style.display = "none";
        progressText.textContent = "3/5: Niveles";
        cardTitle.textContent = "Cuentanos sobre tu consumo de carne";
        cardText.textContent = "Para empezar nos gustaría saber cuantas porciones de carne a la semana consumes aproximadamente. <br> Una pechuga asada, una hamburguesa de res o un huevo con tocino cuenta como una porción cada una."
        cardImage.style.display = "none";
        cardPortions.style.display = "flex";
    } else if (currentActive === 4){
        prev.disabled = false;
        progress.style.width = "75%";
        logo.style.display = "none";
        progressText.textContent = "4/5: Gustos Alimenticios";
    } else if (currentActive === 5){
        prev.disabled = false;
        progress.style.width = "100%";
        logo.style.display = "none";
        progressText.textContent = "5/5: Peso y Estatura";
    }
}
