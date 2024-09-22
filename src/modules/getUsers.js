const getUsers = async (setUsers, setLoading, setError) => {
	const url = 'https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/users'
	try {
		const data = await fetch(url)
		const result = await data.json()
		if (!(result.length == 0)) {
			setUsers(result)
		} else {
			setError('No Hay Usuarios')
		}
	} catch (e) {
		setError(e.toString())
	} finally {
		setLoading(false)
	}
}
export default getUsers
