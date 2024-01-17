let gendersData = JSON.parse(localStorage.getItem("gendersData")) || [];

function GendreFind() {
	const wetherInput = document.querySelector("#wetherInput");
	const resutGender = document.querySelector(".innerchild");
	const name = wetherInput.value;
	if (name) {
		const dataAPI = fetch(`https://api.genderize.io/?name=${name}`)
			.then((response) => {
				return response.json();
			})
			.then((dataAPI) => {
				gendersData.push(dataAPI);
				console.log(dataAPI);
				resutGender.innerHTML = "";

				const tample = `
				<div class="card" style="width: 18rem;">
  <img src="${dataAPI.gender == 'male' ? 'https://pics.craiyon.com/2023-07-28/69063d18c2664d0a9244666be0dc493b.webp' : 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705276800&semt=ais'}" class="card-img-top" alt="">
  <div class="card-body">
    <h2 class="card-title">Name: ${dataAPI.name}</h2>
    <h3 class="card-text">Gender: ${dataAPI.gender}</h3>
    <h3 class="card-text">Probability: ${dataAPI.probability}</h3>
  </div>
</div>`;
					resutGender.innerHTML = tample;

				localStorage.setItem("gendersData", JSON.stringify(gendersData));
			});
	} else {
		alert("imingizni kiriting...")
	}
}
GendreFind();
