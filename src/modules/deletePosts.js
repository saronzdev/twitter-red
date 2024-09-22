const deletePosts = async (username, postId, deletePost, setDeletePost) => {
	const url = 'https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/posts/'
	console.log(url + username)
	try {
		const data = await fetch(url + username, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({postId}),
		})
		const result = await data.json()
		if (data.status === 200) {
			setDeletePost(!deletePost)
		}
	} catch (e) {
		console.log(e)
		alert('Error al borrar el post')
	}
}
export default deletePosts
