const URL_ROOT = 'http://127.0.0.1:8001/'

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
	const URL = URL_ROOT + 'cost'
	postFormData(URL, formData)
}

export function requestConsultation(formData: FormData) {
	const URL = URL_ROOT + 'consultation'
	postFormData(URL, formData)
}

export function requestCall(formData: FormData) {
	const URL = URL_ROOT + 'call'
	postFormData(URL, formData)
}

export function writeToSupport(formData: FormData) {
	const URL = URL_ROOT + 'support'
	postFormData(URL, formData)
}
