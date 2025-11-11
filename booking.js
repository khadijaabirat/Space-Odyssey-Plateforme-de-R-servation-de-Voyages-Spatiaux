let destarr = [];

async function loaddest() {
  try {
    const r = await fetch("./destinations.json");
    const d = await r.json();
    destarr = d.destinations;
    ajoutslect(destarr);
  } catch (error) {
    console.error("Erreur lors du chargement des destinations:", error);
  }
}
let selectdest = document.getElementById("destination");

function ajoutslect(destarr) {
  selectdest.innerHTML = '<option value="">Select your destination</option>';
  destarr.forEach((obj) => {
    //   selectdest.innerHTML +=`<option value="${obj.name}"">${obj.name}</option>`;
      const opsdest =document.createElement('option');
      opsdest.value=obj.id;
      opsdest.textContent=obj.name;
      selectdest.appendChild(opsdest);
  });
}
loaddest();
function afficherpack(){
let p = selectdest.value;

const packdiv=document.createElement('div');
packdiv.classList="moon";
const packh1=document.createElement('h1');
const packp=document.createElement('p');

packdiv.appendChild(packh1);
packdiv.appendChild(packp);


};