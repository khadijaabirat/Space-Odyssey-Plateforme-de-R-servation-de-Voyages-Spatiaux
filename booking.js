let destarr = [];
var priceprincipale = 0;
var day = 0;
var pricePerDay = 0;
var cont = 0;

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
    selectdest.innerHTML += `<option value="${obj.id}"">${obj.name}</option>`;
  });
}
loaddest();
selectdest.addEventListener("change", afficherpack);

function afficherpack() {
  let p = selectdest.value;
  let selecteddest = destarr.find((dest) => dest.id === p);
  information(selecteddest);
  let divpack = document.getElementById("accommodation-options");
  function information(selecteddest) {
    let divselect = document.getElementById("divselect");
    divselect.innerHTML = "";
    if (selecteddest) {
      divselect.innerHTML = `
<div class="my-4 grid grid-cols-2 gap-4 accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
<div ><h3 class="font-bold font-orbitron text-lg mb-1 ml-5">${selecteddest.planet}</h3>
<img class="m-4" src="${selecteddest.image}" width=40% ></div>
<div>
<p class="text-sm text-gray-400 py-4 px-4">${selecteddest.description}</p>
<p class="text-sm text-gray-400 font-bold px-5">travelDuration:<span class="text-1xl font-orbitron font-bold text-neon-blue glow-text"> ${selecteddest.travelDuration}</span></p>
<p class="text-sm text-gray-400 font-bold px-4">distance:<span class="text-1xl font-orbitron font-bold text-neon-blue glow-text"> ${selecteddest.distance}</span></p>
</div>
</div>`;
    }
  }

  const packdivS = document.createElement("div");
  packdivS.innerHTML = `<div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                <label class="flex-1 cursor-pointer">
<input type="radio" name="accommodation_type" value="standard" class="sr-only peer" checked>            
  <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70 peer-checked:border-neon-blue/70
               peer-checked:shadow-lg peer-checked:shadow-neon-blue/40">
                                  <h3 class="font-bold font-orbitron text-lg mb-1">Standard Cabin</h3>
                      <p class="text-sm text-gray-400">Comfortable private quarters with basic amenities</p>
                      <p class="text-sm text-gray-400 font-bold ">pricePerDay: <span class="text-1xl font-orbitron font-bold text-neon-blue glow-text">500</span></p>
                    </div>
                    </label>
                </div>`;
  const packdivL = document.createElement("div");

  packdivL.innerHTML = `<div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                     <label class="flex-1 cursor-pointer">
            <input type="radio" name="accommodation_type" value="luxury" class="sr-only peer">
            <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70 peer-checked:border-neon-blue/70
               peer-checked:shadow-lg peer-checked:shadow-neon-blue/40">
                       <h3 class="font-bold font-orbitron text-lg mb-1 text-gray-200">Luxury Suite</h3>
                      <p class="text-sm text-gray-400">Spacious suite with premium amenities and viewports</p>
                      <p class="text-sm text-gray-400 font-bold">pricePerDay: <span class="text-1xl font-orbitron font-bold text-neon-blue glow-text">1200</span></p>
                      </div>
                          </label>
                </div>`;
  const packdivZ = document.createElement("div");
  packdivZ.innerHTML = `<div class="accommodation-card p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70">
                      <label class="flex-1 cursor-pointer">
            <input type="radio" name="accommodation_type" value="zero_g" class="sr-only peer">
             <div class="p-4 rounded-xl border-2 border-space-dark bg-space-blue transition duration-300 hover:border-neon-blue/70 peer-checked:border-neon-blue/70
               peer-checked:shadow-lg peer-checked:shadow-neon-blue/40">
                      <h3 class="font-bold font-orbitron text-lg mb-1 text-gray-200">Zero-G Pod</h3>
                      <p class="text-sm text-gray-400">Advanced accommodation with zero-gravity experience</p>
                      <p class="text-sm text-gray-400 font-bold">pricePerDay: <span class="text-1xl font-orbitron font-bold text-neon-blue glow-text">2000</span></p>       
                      </div>
                        </label>
                </div>`;
  divpack.innerHTML = "";
  switch (p) {
    case "moon":
      divpack.appendChild(packdivS);
      divpack.appendChild(packdivL);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    case "mars":
      divpack.appendChild(packdivS);
      divpack.appendChild(packdivL);
      divpack.appendChild(packdivZ);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    case "europa":
      divpack.appendChild(packdivS);
      divpack.appendChild(packdivL);
      divpack.appendChild(packdivZ);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    case "titan":
      divpack.appendChild(packdivS);
      divpack.appendChild(packdivL);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    case "orbital-station":
      divpack.appendChild(packdivS);
      divpack.appendChild(packdivL);
      divpack.appendChild(packdivZ);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    case "venus-clouds":
      divpack.appendChild(packdivL);
      divpack.appendChild(packdivZ);
      priceprincipale = selecteddest.price;
      day = selecteddest.jour;
      break;
    default:
      divpack.innerHTML = "<p>Please select a valid destination.</p>";
  }

  document.querySelectorAll('input[name="accommodation_type"]').forEach((obj) => {
    obj.addEventListener("change", priceacc);
  });
  price();
}

function priceacc() {
  const selcacc = document.querySelector('input[name="accommodation_type"]:checked').value;
  if (selcacc === "standard") {
    pricePerDay = 500;
  }
  if (selcacc === "luxury") {
    pricePerDay = 1200;
  }
  if (selcacc === "zero_g") {
    pricePerDay = 2000;
  }
  price();
}
const r = document.querySelectorAll('input[name="passengers"]');
r.forEach((obj) => {
  obj.addEventListener("change", ajouterform);
});
function ajouterform() {
  const f = document.querySelector(".forme");
  const selc = document.querySelector('input[name="passengers"]:checked').value;
  const b = document.querySelector(".btnadd");
  b.innerHTML = "";
  if (selc === "solo") {
    cont = 1;
  }
  if (selc === "couple") {
    cont = 2;
  }
  if (selc === "group") {
    cont = 3;
    b.innerHTML = `<button type="button" class="add-prs w-full py-3 rounded-lg text-gray-200 font-semibold text-lg bg-space-blue hover:bg-space-blue/70 transition duration-200 border border-space-dark shadow-neon-blue\/50">Add Passenger</button>`;
    const addprs = document.querySelector(".add-prs");
    addprs.addEventListener("click", () => {
      if (cont < 6) {
        cont++;
        addform(cont, f);
        price();
      } else alert("Maximum 6 passengers");
    });
  }
  addform(cont, f);
  price();
  function addform(cont, f) {
    f.innerHTML = "";
    for (let i = 1; i <= cont; i++) {
      const fdi = document.createElement("div");
      fdi.innerHTML = `<h2 class="text-2xl font-orbitron font-semibold mb-6 text-neon-cyan">Personal Information</h2>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" class="w-full p-3 bg-space-dark border border-space-blue rounded-lg text-gray-100 focus:ring-neon-blue focus:border-neon-blue" />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" class="w-full p-3 bg-space-dark border border-space-blue rounded-lg text-gray-100 focus:ring-neon-blue focus:border-neon-blue" />
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full p-3 bg-space-dark border border-space-blue rounded-lg text-gray-100 focus:ring-neon-blue focus:border-neon-blue" />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" class="w-full p-3 bg-space-dark border border-space-blue rounded-lg text-gray-100 focus:ring-neon-blue focus:border-neon-blue" />
              </div>
            </div>
            <div>
              <label for="requirements" class="block text-sm font-medium text-gray-300 mb-2">Special Requirements</label>
              <textarea id="requirements" name="requirements" rows="4" placeholder="Any special requirements or notes..." class="w-full p-3 bg-space-dark border border-space-blue rounded-lg text-gray-100 focus:ring-neon-blue focus:border-neon-blue resize-none"></textarea>
            </div>`;
      f.appendChild(fdi);
    }
  }
}

function price() {
  let tprice = pricePerDay * day * 2 * cont + priceprincipale;
  console.log(tprice, pricePerDay, day, cont, priceprincipale);
  let pricehtm = document.getElementById("final-price-display");
  if (pricehtm) {
    if (tprice > 0) {
      pricehtm.innerHTML = `${tprice} /$ `;
    } else {
      pricehtm.innerHTML = `Veuillez sélectionner les options`;
    }
  }
}
