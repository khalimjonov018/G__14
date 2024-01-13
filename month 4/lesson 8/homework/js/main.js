const firstBtn = document.querySelector(".first__btn");
const secondBtn = document.querySelector(".second__btn");
const content = document.querySelector(".content");
const postModalBody = document.querySelector('#post_modal-body');

firstBtn.addEventListener("click", () => {
	const userProise = fetch("https://jsonplaceholder.typicode.com/users")
		.then((data) => {
			return data.json();
		})
		.then((user) => {
			console.log(user);
			content.innerHTML = "";
			user.forEach((user) => {
				const template = `
					<div>
						<p>id: ${user.id}</p>
						<p>name: ${user.name}</p>
						<p>username: ${user.username}</p>
						<p>email: ${user.email}</p>
						<button onclick="renderPosts(${user.id})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button>
					</div>
					`;
				content.innerHTML += template;
			});
		});
});

function renderPosts(id) {
	const userProise = fetch("https://jsonplaceholder.typicode.com/posts")
		.then((data) => {
			return data.json();
		})
		.then((posts) => {
			console.log(posts);
			postModalBody.innerHTML = "";
			posts.forEach((post) => {
				const template = `
					<div>
					<p>userId: ${post.userId}</p>
					<p>id: ${post.id}</p>
					<p>title: ${post.title}</p>
					<p>body: ${post.body}</p>
					</div>
				`;

				if (post.userId === id) {
					postModalBody.innerHTML += template;
				}
			});
		});
}

// firstBtn.addEventListener("click", () => {
// 	userProise.document.body.innerHTML += `<h1>${user.name}</h1>`;
// console.log(user);
// });
// document.querySelector(".first__btn").addEventListener("click", () => {
// 	const userId = prompt("Enter user id");

// 	if (!userId) {
// 		alert("Please enter user id");
// 	}
// 	return;
// });
// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((data) => {
// 		if (!data.ok) {
// 			throw new Error("xatolik yuz berdi ");
// 		}
// 		return data.json();
// 	})
// 	.then((user) => {
// 		const content = document.querySelector(".content");
// 		const newEl = document.createElement("div");
// 		newEl.innerHTML += `<p>ID: ${user.id}</p>``<p>NAME: ${user.name}</p>``<p>EMAIL: ${user.email}</p>`;
// 		content.innerHTML = "";
// 		content.appendChild(newEl);
// 	})
// 	.catch((err) => {
// 		throw new Error("xatolik yuz berdi ");
// 	});
