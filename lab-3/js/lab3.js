const tabs = document.querySelectorAll("[role='tab']");

tabs.forEach((tab) => {
    console.log(tab);
    tab.addEventListener("click", (event) => {
		console.log(event);
		if (event.target.open) {
			tabs.forEach((tab) => {
				if (tab !== event.target) {
					tab.removeAttribute("open");
				}
			});
		}
	});
});