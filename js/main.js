// Check If there is local storage color option

if (localStorage.getItem("color_option") !== null) {
	document.documentElement.style.setProperty(
		"--main-color",
		localStorage.getItem("color_option")
	);
	document.querySelectorAll(".colors-list li").forEach((li) => {
		li.classList.remove("active");

		if (li.dataset.color === localStorage.getItem("color_option")) {
			li.classList.add("active");
		}
	});
}

// Toggle Spin Class on Icon
document.querySelector(".toggle-settings").onclick = function () {
	document.querySelector(".toggle-settings .gear").classList.toggle("fa-spin");
	document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
let colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
	li.addEventListener("click", (e) => {
		// Active Class
		colorsLi.forEach((li) => {
			li.classList.remove("active");
		});
		li.classList.add("active");
		// Set Color on Root
		document.documentElement.style.setProperty(
			"--main-color",
			`${e.target.dataset.color}`
		);
		// Set Color On Local storage
		localStorage.setItem("color_option", e.target.dataset.color);
	});
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imagesArr = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

// Change Background Image Url
landingPage.style.backgroundImage = `url("images/3.jpg")`;

// Get Random Number

setInterval(() => {
	let randNum = Math.floor(Math.random() * imagesArr.length);

	landingPage.style.backgroundImage = `url("images/${imagesArr[randNum]}")`;
}, 10000);
