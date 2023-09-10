function postFormData(url: string, formData: FormData) {
	fetch(url, {
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		method: 'POST',
		body: formData
	})
		.then(response => console.log(response))
		.catch(e => console.log(url))
}

export function requestCost(formData: FormData) {
	const URL = 'https://api.olp.su/cost'
	postFormData(URL, formData)
}

export function requestConsultation(formData: FormData) {
	const URL = 'https://api.olp.su/consultation'
	postFormData(URL, formData)
}

export function requestCall(formData: FormData) {
	const URL = 'https://api.olp.su/call'
	postFormData(URL, formData)
}

export function writeToSupport(formData: FormData) {
	const URL = 'https://api.olp.su/support'
	postFormData(URL, formData)
}
