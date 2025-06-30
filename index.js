"use strict";
const changer = /**@type {HTMLElement}*/document.getElementById("changer");
const age = /**@type {HTMLElement}*/document.getElementById("age");

const taglines = [
	{ html: "fast" },
	{ html: "stable" },
	{ html: "<del>inefficient</del>" },
	{ html: "scalable" },
	{ html: "<del>bloated</del>" },
	{ html: "reliable" },
	{ html: "maintainable" },
	{ html: "<del>deceptive</del>" },
	{ html: "secure" },
	{ html: "usable" },
	{ html: "performant" },
	{ html: "<del>overengineered</del>" },
	{ html: "portable" },
	{ html: "connected" },
	{ html: "constructive" },
	{ html: "cool" },
];
let point = 0;
setInterval(() => {
	const tagline = taglines[point];
	changer.className = "animate-top";
	changer.innerHTML = tagline.html;
	setTimeout(() => {
		changer.className = "";
	}, 400);
	point = point < taglines.length - 1 ? point + 1 : 0;
}, 2000)

age.textContent = new Date(Date.now() - new Date(2006, 3, 8)).getUTCFullYear() - 1970;

