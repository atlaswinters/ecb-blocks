import DOMPurify from 'dompurify';

const validateAndEncodeURL = (url) => {
    const trimmedUrl = (url || '').trim();

    const sanitizedUrl = DOMPurify.sanitize(trimmedUrl, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
        ALLOW_DATA_ATTR: false,
        ADD_ATTR: ['target', 'rel'],
        USE_PROFILES: { html: false }
    });

    try {
        const url = new URL(sanitizedUrl);
        if (!['http:', 'https:'].includes(url.protocol)) {
            return '#';
        }
        return sanitizedUrl;
    } catch {
        return '#';
    }
};

export default validateAndEncodeURL;