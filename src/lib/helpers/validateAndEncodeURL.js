import DOMPurify from 'dompurify';

const validateAndEncodeURL = (url) => {
    if ( url == '#') {
        return '#';
    }
    try {
        const urlObj = new URL(url);
        if (urlObj.origin !== window.location.origin && urlObj.origin !== 'https://images.unsplash.com' && urlObj.origin !== 'https://i.pinimg.com') {
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