import PostSelect from '../../lib/ui-components/PostSelect';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';

const { InspectorControls, MediaUpload } = wp.blockEditor;
const { TextControl, Panel, PanelBody, More, Button } = wp.components;

const ALLOWED_MEDIA_TYPES = ['image'];

const Controls = ({
    setAttributes,
    attributes: {
        leftPhoto,
        rightPhotoOne,
        rightPhotoTwo,
        headline,
        subheadline,
        excerpt,
        link,
        linkText
    }
}) => {
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title="Photos" icon={More} initialOpen={false}>
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ leftPhoto: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={leftPhoto}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Update Left Image</Button>
                        )}
                    />
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ rightPhotoOne: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={validateAndEncodeURL(rightPhotoOne)}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Update Top Right Image</Button>
                        )}
                    />
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ rightPhotoTwo: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={validateAndEncodeURL(rightPhotoTwo)}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Update Bottom Right Image</Button>
                        )}
                    />
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Content" icon={More} initialOpen={false}>
                    <div>
                        <PostSelect
                            onChange={(selectedPost) => {
                                if (selectedPost.value) {
                                    setAttributes({
                                        selectedPostID: parseString(selectedPost.value.id),
                                        headline: parseString(selectedPost.value.title),
                                        excerpt: parseString(selectedPost.value.excerpt),
                                        link: validateAndEncodeURL(selectedPost.value.url)
                                    });
                                }
                            }
                            } />
                        <br />
                    </div>
                    <TextControl
                        label='Headline'
                        value={parseString(headline)}
                        onChange={(value) => { setAttributes({ headline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Subheadline'
                        value={parseString(subheadline)}
                        onChange={(value) => { setAttributes({ subheadline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Excerpt'
                        value={parseString(excerpt)}
                        onChange={(value) => { setAttributes({ excerpt: parseString(value) }) }}
                    />
                    <TextControl
                        label='Link'
                        value={validateAndEncodeURL(link)}
                        onChange={(value) => { setAttributes({ link: validateAndEncodeURL(value) }) }}
                    />
                    <TextControl
                        label='Link Text'
                        value={parseString(linkText)}
                        onChange={(value) => { setAttributes({ linkText: parseString(value) }) }}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    )
};

export default Controls;