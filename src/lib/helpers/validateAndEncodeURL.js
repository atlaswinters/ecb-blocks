import DOMPurify from 'dompurify';

const validateAndEncodeURL = (url) => {
    try {
        return DOMPurify.sanitize(encodeURI(url), {
            ALLOWED_PROTOCOLS: ['http', 'https']
        });
    } catch (e) {
        console.error('Invalid URL:', e);
        return '';
    }
};

export default validateAndEncodeURL;