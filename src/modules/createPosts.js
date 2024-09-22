const createPosts = async (post, setPosts, username) => {
	const url = 'https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/posts/'
	console.log(url + username)
	try {
		const data = await fetch(url + username, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({post}),
		})
		const result = await data.json()
		setPosts(result)
	} catch (e) {
		console.log(e)
		alert('Error al crear post')
	}
}
export default createPosts
