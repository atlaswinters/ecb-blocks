import PostSelect from '../../lib/ui-components/PostSelect';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';

const { InspectorControls, MediaUpload } = wp.blockEditor;
const { TextControl, Panel, PanelBody, More, Button } = wp.components;

const ALLOWED_MEDIA_TYPES = ['image'];

const Controls = (props) => {
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title="Edit/Update Vertical Stripes Grid Photo" icon={More} initialOpen={false}>
                    <MediaUpload
                        onSelect={(media) => {
                            props.setAttributes({ highlightedPhoto: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={props.attributes.highlightedPhoto}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Update Main Vertical Image</Button>
                        )}
                    />
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Edit Vertical Stripes Grid Content" icon={More} initialOpen={false}>
                    <div>
                        <PostSelect
                            onChange={(selectedPost) => {
                                if (selectedPost.value) {
                                    props.setAttributes({
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
                        value={parseString(props.attributes.headline)}
                        onChange={(value) => { props.setAttributes({ headline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Subheadline'
                        value={parseString(props.attributes.subheadline)}
                        onChange={(value) => { props.setAttributes({ subheadline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Side Quote'
                        value={parseString(props.attributes.sidequote)}
                        onChange={(value) => { props.setAttributes({ sidequote: parseString(value) }) }}
                    />
                    <TextControl
                        label='CTA/Block Link'
                        value={encodeURI(props.attributes.link)}
                        onChange={(value) => { props.setAttributes({ link: validateAndEncodeURL(value) }) }}
                    />
                    <TextControl
                        label='CTA/Block Link Text'
                        value={parseString(props.attributes.linkText)}
                        onChange={(value) => { props.setAttributes({ linkText: parseString(value) }) }}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    )
};

export default Controls;