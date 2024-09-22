const loginUser = async (username, password) => {
	const url = 'https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/login'
	const data = JSON.stringify({username, password})
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: data,
		})
		if (response.status === 200) {
			const result = await response.json()
			return {status: response.status, token: result.token}
		} else return {status: response.status}
	} catch (e) {
		return {message: e.toString()}
	}
}
export default loginUser
