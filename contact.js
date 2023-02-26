const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', e => {
	e.preventDefault();
	const name = form.elements.name.value;
	const email = form.elements.email.value;
	const message = form.elements.message.value;

	if (!name || !email || !message) {
		responseDiv.innerHTML = '<p id="error">Please fill in all fields.</p>';
	} else {
		const data = {
			name,
			email,
			message
		};

		fetch('/send-email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				responseDiv.innerHTML = '<p>Message sent successfully.</p>';
				form.reset();
			} else {
				responseDiv.innerHTML = '<p id="error">Message failed to send. Please try again later.</p>';
			}
		})
		.catch(err => {
			responseDiv.innerHTML = `<p id="error">${err.message}</p>`;
		});
	}
});
