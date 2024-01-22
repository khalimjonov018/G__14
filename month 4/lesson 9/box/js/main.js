function findNation() {
	const findNational = document.getElementById("inputNation");
	const NationResult = document.getElementById("nationResult");
	const nation = findNational.value;
	if (nation) {
		const findNationalResult = fetch(`https://api.nationalize.io/?name=${nation}`)
			.then((result) => {
				// console.log(result);
				return result.json();
			})
			.then((data) => {
				console.log(data);
				NationResult.innerHTML = "";
				const temple = `<div class="card" style="width: 18rem;">
     <img src="https://finputPasswordlagsapi.com/${data.country[0].country_id}/flat/64.png" class="card-img-top" alt="...">
     <div class="card-body">
       <h2 class="card-title">Name: ${data.name}</h2>
       <h4 class="card-text">Country: ${data.country[0].country_id}</h4>
       <h4 class="card-text">probability: ${data.country[0].probability}</h4>
     </div>
   </div>`;
   NationResult.innerHTML += temple;
			})
			.catch((err) => console.log(err));
	}
}
findNation();
