import PostSelect from '../../lib/ui-components/PostSelect';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
import ecbcolors from '../../components/ecb-colors';

const {
    InspectorControls,
    MediaUpload,
    useSetting,
} = wp.blockEditor;

const {
    TextControl,
    Panel,
    PanelBody,
    More,
    Button,
    ColorPalette,
    ToggleControl
} = wp.components;

const ALLOWED_MEDIA_TYPES = ['image'];

const Controls = (props) => {
    const{
        setAttributes,
        attributes: {
            stripeOneBgColor,
            stripeThreeBgColor,
            contentBgColor,
            invertTextColors,
            highlightedPhoto,
            headline,
            subheadline,
            sidequote,
            link,
            linkText
        }
    } = props;
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title="Photo" icon={More} initialOpen={false}>
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ highlightedPhoto: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={highlightedPhoto}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Update Main Vertical Image</Button>
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
                                        selectedPostId: parseString(selectedPost.value.id),
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
                        onChange={(value) => { props.setAttributes({ headline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Subheadline'
                        value={parseString(subheadline)}
                        onChange={(value) => { setAttributes({ subheadline: parseString(value) }) }}
                    />
                    <TextControl
                        label='Side Quote'
                        value={parseString(sidequote)}
                        onChange={(value) => { setAttributes({ sidequote: parseString(value) }) }}
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
            <Panel>
                <PanelBody title="Colors" icon={More} initialOpen={false}>
                    <hr />
                    <p><strong>First Stripe Background Color</strong></p>
                    <ColorPalette
                        value={stripeOneBgColor}
                        colors={[...ecbcolors, ...useSetting('color.palette')]}
                        onChange={(value) => setAttributes({ stripeOneBgColor: value })}
                    />
                    <hr />
                    <p><strong>Last Stripe Background Color</strong></p>
                    <ColorPalette
                        value={stripeThreeBgColor}
                        colors={[...ecbcolors, ...useSetting('color.palette')]}
                        onChange={(value) => setAttributes({ stripeThreeBgColor: value })}
                    />
                    <hr />
                    <p><strong>Content Square Background Color</strong></p>
                    <ColorPalette
                        value={contentBgColor}
                        colors={[...ecbcolors, ...useSetting('color.palette')]}
                        onChange={(value) => setAttributes({ contentBgColor: value })}
                    />
                    <hr />
                    <p><strong>Invert Text Colors</strong></p>
                    <ToggleControl
                        label="Invert Text Colors"
                        help={
                            invertTextColors
                                ? 'Light Text Colors'
                                : 'Dark Text Colors'
                        }
                        checked={invertTextColors}
                        onChange={(value) => {
                            setAttributes({
                                invertTextColors: value
                            });
                        }}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    )
};

export default Controls;