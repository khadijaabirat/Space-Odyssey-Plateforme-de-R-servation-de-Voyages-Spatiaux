let destarr = [];

async function loaddest() {
  try {
    const r = await fetch("./destinations.json");
    const d = await r.json();
    destarr = d.destinations;
    ajouteslect(destarr);
  } catch (error) {
    console.error("Erreur lors du chargement des destinations:", error);
  }
}
let selectdest = document.getElementById("destination");

function ajouteslect(destarr) {
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
selectdest.addEventListener("change", afficherpack);

function afficherpack(){


// const packdivS=document.createElement('div');
// const packh1S=document.createElement('h1');
// packh1S.textContent="Standard Cabin";
// const packpS=document.createElement('p');
// packpS.textContent="Comfortable private quarters with basic amenities";

// packdivS.appendChild(packh1S);
// packdivS.appendChild(packpS);

// const packdivL=document.createElement('div');
// const packh1L=document.createElement('h1');
// packh1L.textContent="Luxury Suite";
// const packpL=document.createElement('p');
// packpL.textContent="Spacious suite with premium amenities and viewports";

// packdivL.appendChild(packh1L);
// packdivL.appendChild(packpL);

// const packdivZ=document.createElement('div');
// const packh1Z=document.createElement('h1');
// packh1Z.textContent="Zero-G Pod";
// const packpZ=document.createElement('p');
// packpZ.textContent="Advanced accommodation with zero-gravity experience";

// packdivZ.appendChild(packh1Z);
// packdivZ.appendChild(packpZ);
 const packdivS=document.createElement('div');
packdivS.innerHTML=` <div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                    <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                      <h3 class="font-bold font-orbitron text-lg mb-1">Standard Cabin</h3>
                      <p class="text-sm text-gray-400">Comfortable private quarters with basic amenities</p>
                    </div>
                </div>`;
const packdivL=document.createElement('div');
packdivS.innerHTML=` <div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                    <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                      <h3 class="font-bold font-orbitron text-lg mb-1 text-gray-200">Luxury Suite</h3>
                      <p class="text-sm text-gray-400">Spacious suite with premium amenities and viewports</p>
                    </div>
                </div>`;  
const packdivZ=document.createElement('div');
packdivS.innerHTML=`      <div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                    <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                      <h3 class="font-bold font-orbitron text-lg mb-1 text-gray-200">Zero-G Pod</h3>
                      <p class="text-sm text-gray-400">Advanced accommodation with zero-gravity experience</p>
                    </div>
                </div>`;                             
  

let p = selectdest.value;
let divpack=document.getElementById("accommodation-options");



// switch (p){
// case "moon": 
// divpack.innerHTML = "";
// divpack.appendChild(packdivS);
// divpack.appendChild(packdivL);
// divpack.appendChild(packdivZ);
// break;
// case "mars": 
// divpack.innerHTML = "";
// divpack.appendChild(packdivS);
// divpack.appendChild(packdivL);
// divpack.appendChild(packdivZ);
// break;
// case "europa":
//     divpack.innerHTML = "";
// divpack.appendChild(packdivS);
// divpack.appendChild(packdivL);
// break; 
// case "titan":
// divpack.innerHTML = "";
// divpack.appendChild(packdivS);
// divpack.appendChild(packdivL);
// break; 
// case "orbital-station":
//     divpack.innerHTML = "";
// divpack.appendChild(packdivS);
// divpack.appendChild(packdivL);
// divpack.appendChild(packdivZ);
// break; 
// case "venus-clouds": 
// divpack.innerHTML = "";
// divpack.appendChild(packdivL);
// divpack.appendChild(packdivZ);
// break;
//   default:
//     divpack.innerHTML = "<p>Please select a valid destination.</p>";
// }


if(p==="europa" || p=== "mars" || p==="orbital-station"){
        divpack.innerHTML = "";
divpack.appendChild(packdivS);
divpack.appendChild(packdivL);
divpack.appendChild(packdivZ);
} else if(p==="moon" || p=== "titan"){
        divpack.innerHTML = "";
divpack.appendChild(packdivS);
divpack.appendChild(packdivL);
}  else if(p==="venus-clouds"){
        divpack.innerHTML = "";
divpack.appendChild(packdivL);
divpack.appendChild(packdivZ);
}
else {
    divpack.innerHTML="<p>Please select a valid destination.</p>";
}

};