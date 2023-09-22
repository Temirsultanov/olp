const API_URL_ROOT = 'http://olp-api.na4u.ru/'

function postData(url: string, data: object) {
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(data)
	}).then((response) => {
		console.log(response);
	}).catch(e => console.log(e))
}

export function requestCost(formData: FormData) {
	const URL = API_URL_ROOT + 'cost'
	const file = formData.get('file') as File
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.onload = () => {
		const data = {
			name: formData.get('name'),
			surname: formData.get('surname'),
			email: formData.get('email'),
			service: formData.get('service'),
			file: fileReader.result
		}

		postData(URL, data)
	}
}

export function requestConsultation(formData: FormData) {
	const URL = API_URL_ROOT + 'consultation'
	const data = {
		name: formData.get('name'),
		phone: formData.get('phone')
	}

	postData(URL, data)
}

export function requestCall(formData: FormData) {
	const URL = API_URL_ROOT + 'call'
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
