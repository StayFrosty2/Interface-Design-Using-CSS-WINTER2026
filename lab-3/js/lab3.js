// Grab the tabs and panels
const tabs = document.querySelectorAll("[role='tab']");
const panels = document.querySelectorAll("[role='tabpanel']");

// add an event for each tab
tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
		// prevent the default effect so things don't jump around
		event.preventDefault();

		// clear the classes from all of the tabs and panels
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		panels.forEach((panel) => {
			panel.classList.remove("show");
		});

		// add the "active" class to the current tab
		tab.classList.add("active");

		// get the href of the current tab
		const id = event.target.getAttribute("href");

		// short if else string to add the class "show" to the panel, as dictated by the tab
		if (id == "#tabpanel1") {
			panels[0].classList.add("show");
		}
		else if (id == "#tabpanel2") {
			panels[1].classList.add("show");
		}
		else {
			panels[2].classList.add("show");
		}
	});
});

// Sets the default tab to be tab 1 and panel 1
tabs[0].classList.add("active");
panels[0].classList.add("show");