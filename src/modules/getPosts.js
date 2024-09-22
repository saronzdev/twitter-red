const getPosts = async (username, setPosts, setLoading, setError) => {
	const url = `https://slimy-stoddard-ronaldsrdev-d880a627.koyeb.app/api/v1/posts/${username}`
	try {
		const data = await fetch(url)
		const result = await data.json()
		if (result.isPosts) {
			setPosts(result)
		} else {
			setPosts({posts: []})
		}
	} catch (e) {
		setError(e)
	} finally {
		setLoading(false)
	}
}
export default getPosts
