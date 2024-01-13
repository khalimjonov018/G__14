// const userPromise = (url, firstname) => {
// 	const users = ["ibrohim", "bobur", "e'zoza", "gulchapchap"];
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(() => {
// 			if (url === "/users" && firstname) {
// 				resolve(users.find((user) => user === firstname));
// 			} else {
// 				reject("Eror: Cannot find");
// 			}
// 		}, 2000);
// 	});
// };
// const data = userPromise("/users", "bobur")
// 	.then((user) => {
// 		console.log(user);
// 	})
// 	.catch((err) => console.log(err));

// console.log(data);
const userPromise = fetch("https://jsonplaceholder.typicode.com/users")
	.then((user) => {
		return user.json();
	})
	.then((user) => {
		console.log(user);
		user.forEach((data) => {
			document.body.innerHTML += `<h1> id: ${data.id}</h1>
   <h2>name: ${data.name}</h2> <h2>username: ${data.username}</h2> <h2>Email: ${data.email}</2h> <h2>address: ${data.address}</2h>`;
		});
	});
