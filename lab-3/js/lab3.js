const tabs = document.querySelectorAll("[role='tab']");
const content = document.querySelectorAll("[role='tabpanel']");

tabs.forEach((tab) => {
    // console.log(tab);
    tab.addEventListener("click", (event) => {
		// console.log(event);
		event.preventDefault();

		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		content.forEach((panel) => {
			panel.classList.remove("show");
		});

		tab.classList.add("active");

		const id = event.target.getAttribute("href");

		if (id == "#tabpanel1") {
			content[0].classList.add("show");
			console.log("Swapped to Panel 1");
		}
		else if (id == "#tabpanel2") {
			content[1].classList.add("show");
			console.log("Swapped to Panel 2");
		}
		else {
			content[2].classList.add("show");
			console.log("Swapped to Panel 3");
		}
	});
});

tabs[0].classList.add("active");
content[0].classList.add("show");