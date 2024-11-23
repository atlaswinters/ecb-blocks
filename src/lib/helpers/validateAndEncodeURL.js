import DOMPurify from 'dompurify';

const validateAndEncodeURL = (url) => {
    try {
        const urlObj = new URL(url);
        if (urlObj.origin !== window.location.origin) {
            throw new Error('Invalid URL origin');
        }
        return DOMPurify.sanitize(encodeURI(url), {
            ALLOWED_PROTOCOLS: ['http', 'https']
        });
    } catch (e) {
        console.error('Invalid URL:', e);
        return '';
    }
};

export default validateAndEncodeURL;