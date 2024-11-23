import DOMPurify from 'dompurify';

const parseString = ( string ) => {
    if (typeof string !== 'string' && typeof string !== 'number') {
        return '';
    }
    return DOMPurify.sanitize(string.toString(), {
        ALLOWED_TAGS: [], // Remove all HTML tags.
        ALLOWED_ATTR: [], // Remove all attributes.
        RETURN_DOM_TEXT_NODE: true, // Return pure text.
        RETURN_DOM_FRAGMENT: false,
        RETURN_TRUSTED_TYPE: true,
    }).toString();
}
export default parseString;