const tabs = document.querySelectorAll("[role='tab']");

tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener("click", (event) => {
		console.log(event);
		event.preventDefault();
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		tab.classList.add("active");
	});
});

