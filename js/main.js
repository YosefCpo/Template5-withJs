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

// Switch Random Background Options
let radndomBackEl = document.querySelectorAll(".random-backgrounds span");

// Random Background option
let backgroundOption = true;

let theBackgroundInterval;

// Loop on all Spans
radndomBackEl.forEach((el) => {
	el.addEventListener("click", (e) => {
		// Active Class
		radndomBackEl.forEach((el) => {
			el.classList.remove("active");
		});
		el.classList.add("active");

		if (e.target.dataset.background === "yes") {
			backgroundOption = true;
			randomizeImage();
		} else {
			backgroundOption = false;
			clearInterval(theBackgroundInterval);
			document.querySelector(".landing-page").style.backgroundImage =
				"url('Images/1.png')";
		}

		// Local Storage
		if (e.target.dataset.background === "yes") {
			window.localStorage.setItem("background_option", "yes");
		} else {
			window.localStorage.setItem("background_option", "no");
		}
	});
});

// Get From Local storage
if (window.localStorage.getItem("background_option") !== null) {
	clearInterval(theBackgroundInterval);
	if (window.localStorage.getItem("background_option") === "yes") {
		backgroundOption = true;
		randomizeImage();
	} else {
		backgroundOption = false;
		clearInterval(theBackgroundInterval);
		document.querySelector(".landing-page").style.backgroundImage =
			"url('images/1.png')";
	}
	radndomBackEl.forEach((span) => {
		span.classList.remove("active");
		if (
			span.dataset.background ===
			window.localStorage.getItem("background_option")
		) {
			span.classList.add("active");
		}
	});
} else {
	document.getElementsByClassName("yes")[0].classList.add("active");
}

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Images
let imagesArr = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function randomizeImage() {
	if (backgroundOption === true) {
		theBackgroundInterval = setInterval(() => {
			let randNum = Math.floor(Math.random() * imagesArr.length);

			landingPage.style.backgroundImage = `url("images/${imagesArr[randNum]}")`;
		}, 10000);
	}
}
