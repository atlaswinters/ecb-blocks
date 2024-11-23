import DOMPurify from 'dompurify';

const apiFetch = wp.apiFetch;

const findPost = async (searchTerm) => {
	if (typeof searchTerm !== 'string') {
		throw new Error('Search term must be a string');
	}

	// Clean and sanitize the search term.
	const cleanSearchTerm = DOMPurify.sanitize(searchTerm, {
		ALLOWED_TAGS: [], // Strip all HTML.
		ALLOWED_ATTR: [], // Strip all attributes.
	}).trim();

	// Encode the search term for URL.
	const encodedSearchTerm = encodeURIComponent(cleanSearchTerm);

	// Validate length after cleaning.
	if (encodedSearchTerm.length === 0) {
		return [];
	}

	var path = '/wp/v2/search/?search=' + encodedSearchTerm;
	return await apiFetch({ path: path }).then(response => {
		return response;
	});
}
export default findPost;