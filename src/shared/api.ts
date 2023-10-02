const API_URL_ROOT = 'http://api.olp.su/'

function postData(url: string, data: object) {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json"
		}
	}).catch(e => console.log(e))
}

function postFormData(url: string, formData: FormData) {
	fetch(url, {
		method: 'POST',
		body: formData,
	}).catch(e => console.log(e))
}

export function requestCost(formData: FormData) {
	const URL = API_URL_ROOT + 'request-cost'
	postFormData(URL, formData)
}

export function requestConsultation(formData: FormData) {
	const URL = API_URL_ROOT + 'request'
	const data = {
		name: formData.get('name'),
		phone: formData.get('phone')
	}

	postData(URL, data)
}

export function requestCall(formData: FormData) {
	const URL = API_URL_ROOT + 'request'
	const data = {
		name: formData.get('name'),
		phone: formData.get('phone')
	}

	postData(URL, data)
}

export function writeToSupport(formData: FormData) {
	const URL = API_URL_ROOT + 'support'
	const data = {
		name: formData.get('name'),
		email: formData.get('email'),
		description: formData.get('description')
	}

	postData(URL, data)
}
