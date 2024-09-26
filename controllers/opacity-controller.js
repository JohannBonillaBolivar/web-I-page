const up = document.getElementById("opacity-up");
const down = document.getElementById("opacity-down");
const img = document.getElementById("opacity-img");
const txt = document.getElementById("text-change");

up.addEventListener("click", () => {
	if (img.style.opacity.length < 2 || Number(img.style.opacity) > 1) {
		img.style.opacity = 1;
	} else {
		img.style.opacity = Number(img.style.opacity) + 0.1;
	}
	txt.textContent = `Transparencia al ${img.style.opacity * 100}%`;
	console.log(img.style.opacity);
});
down.addEventListener("click", () => {
	if (img.style.opacity.length < 2) {
		img.style.opacity = 0.9;
	} else {
		img.style.opacity = Number(img.style.opacity) - 0.1;
	}
	txt.textContent = `Transparencia al ${Number(img.style.opacity) * 100}%`;
	console.log(img.style.opacity);
});
