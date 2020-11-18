document.onreadystatechange = function() { 
	if (document.readyState !== "complete") { 
			document.querySelector( 
				"body").style.visibility = "hidden"; 
			document.querySelector( 
				"#loader").style.visibility = "visible"; 
	} else { 
			document.querySelector( 
				"#loader").style.display = "none"; 
			document.querySelector( 
				"body").style.visibility = "visible"; 
	} 
}; 



/**form**/

window.addEventListener("DOMContentLoaded", function() {

	// get the form elements defined in your form HTML above

	const form = document.getElementById("my-form");
	// const button = document.getElementById("my-form-button");
	const status = document.getElementById("status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		status.classList.add("success");
		status.innerHTML = "Thanks! your message was sent.";
	}

	function error() {

		status.classList.add("error")
		status.innerHTML = "Oops! There was a problem.";
	}

	// handle the form submission event

	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		const data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}

// window.addEventListener('load', () => {
// 	const tabNavigation = TabNavigation()
// 	tabNavigation.init()
// })

/**smile**/

// document.querySelector('body')
// .addEventListener('mousemove', eyeball)

// function eyeball(){
// 	const eye = document.querySelectorAll('.eye');
// 	eye.forEach((eye) => {
// 		let x = (eye.getBoundingClientRect().left)
// 		+ (eye.clientWidth / 2);
// 		let y = (eye.getBoundingClientRect().top)
// 		+ (eye.clientHeight / 2);
// 		let radian = Math.atan2(event.pageX - x, event.pageY - y);
// 		let rot = (radian * (180 / Math.PI) * -1) + 270;
// 		eye.style.transform = "rotate("+ rot +"deg)"
// 	})
// }


/**
 * slider
**/
