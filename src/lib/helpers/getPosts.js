const apiFetch = wp.apiFetch;

const getPosts = async ( args ) => {
	let options = {
		...args 
	};
	var path = '/wp/v2/' + options.postType + '/?' + options.params;
	return await apiFetch( { path: path } ).then( response => {
		return response;
	});
}
export default getPosts;