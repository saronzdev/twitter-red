export const registerUser = async (name, email, username, password) => {
	const url = 'https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/register'
	const data = JSON.stringify({name, email, username, password})
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: data,
		})
		const result = await response.json()
		return {status: response.status, token: result.token}
	} catch (e) {
		console.log(e.toString())
		return e.toString()
	}
}
