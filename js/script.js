var modalClose = document.querySelector(".modal-close");
var modal = document.querySelector(".modal");
var modalOpen = document.querySelector(".button-modal");
var formFeedback = modal.querySelector(".modal-feedback");
var nameUserFeedback = modal.querySelector(".modal-name");
var emailFeedback = modal.querySelector(".modal-email");  
var textFeedback = modal.querySelector(".modal-text"); 
var buttonFeedback = modal.querySelector(".button-feedback");

modalOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-show");
	nameUserFeedback.focus();
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-show");
	modal.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modal.classList.contains("modal-show")) {
			evt.preventDefault();
			modal.classList.remove("modal-show");
			modal.classList.remove("modal-error");
		}
	}
});

formFeedback.addEventListener("submit", function (evt) {
	if (!nameUserFeedback.value || !emailFeedback.value || !textFeedback.value) {
		evt.preventDefault();
		buttonFeedback.classList.remove("modal-error");
		buttonFeedback.offsetWidth = buttonFeedback.offsetWidth;
		buttonFeedback.classList.add("modal-error");
	}
});
