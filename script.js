let inputAdd = document.getElementById("nouvTache");
let add = document.getElementById("add");
let clear = document.getElementById("clear");

add.addEventListener("click", () => {
    let inputA = inputAdd.value;

    const btn = document.createElement("button");
    btn.innerText = "Remove";
    const valeur = document.createElement("h2");
    valeur.innerText = inputA;
    const semble = document.querySelector(".semble");
    semble.appendChild(valeur);
    semble.appendChild(btn);
    inputAdd.value = "";

    btn.addEventListener('click', () => {
        semble.removeChild(valeur);
        semble.removeChild(btn);
    })
})

clear.addEventListener("click", () => {
    const semble = document.querySelector(".semble");
    semble.innerHTML = '';
})