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
    const {
        setAttributes,
        attributes: {
            stripeBg,
            photo,
            photoTwo,
            photoThree,
            photoFour,
            subheadline,
            link,
            linkText,
            linkOne,
            linkTwo,
            linkThree,
            linkFour
        }
    } = props;
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title="Photo" icon={More} initialOpen={false}>
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ photo: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={photo}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Change Photo One</Button>
                        )}
                    />
                    <br />
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ photoTwo: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={photoTwo}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Change Photo Two</Button>
                        )}
                    />
                    <br />
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ photoThree: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={photoThree}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Change Photo Three</Button>
                        )}
                    />
                    <br />
                    <MediaUpload
                        onSelect={(media) => {
                            setAttributes({ photoFour: validateAndEncodeURL(media.url) });
                        }}
                        allowedTypes={ALLOWED_MEDIA_TYPES}
                        value={photoFour}
                        render={({ open }) => (
                            <Button className="button" onClick={open}>Change Photo Four</Button>
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
                                        footerText: parseString(selectedPost.value.excerpt),
                                        link: validateAndEncodeURL(selectedPost.value.url),
                                        linkText: parseString(selectedPost.value.title),
                                    });
                                    if ( '#' == linkOne ) {
                                        setAttributes({ linkOne: validateAndEncodeURL(selectedPost.value.url)})
                                    }
                                    if ( '#' == linkTwo ) {
                                        setAttributes({ linkTwo: validateAndEncodeURL(selectedPost.value.url)})
                                    }
                                    if ( '#' == linkThree ) {
                                        setAttributes({ linkThree: validateAndEncodeURL(selectedPost.value.url)})
                                    }
                                    if ( '#' == linkFour ) {
                                        setAttributes({ linkFour: validateAndEncodeURL(selectedPost.value.url)})
                                    }
                                }
                            }
                            } />
                        <br />
                    </div>
                    <TextControl
                        label='Subheadline'
                        value={parseString(subheadline)}
                        onChange={(value) => { setAttributes({ subheadline: parseString(value) }) }}
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
                    <TextControl
                        label='Image Link One'
                        value={validateAndEncodeURL(linkOne)}
                        onChange={(value) => { setAttributes({ linkOne: validateAndEncodeURL(value) }) }}
                    />
                    <TextControl
                        label='Image Link Two'
                        value={validateAndEncodeURL(linkTwo)}
                        onChange={(value) => { setAttributes({ linkTwo: validateAndEncodeURL(value) }) }}
                    />
                    <TextControl
                        label='Image Link Three'
                        value={validateAndEncodeURL(linkThree)}
                        onChange={(value) => { setAttributes({ linkThree: validateAndEncodeURL(value) }) }}
                    />
                    <TextControl
                        label='Image Link Four'
                        value={validateAndEncodeURL(linkFour)}
                        onChange={(value) => { setAttributes({ linkFour: validateAndEncodeURL(value) }) }}
                    />

                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Colors" icon={More} initialOpen={false}>
                    <hr />
                    <p><strong>Vertical Stripe Background Color</strong></p>
                    <ColorPalette
                        value={stripeBg}
                        colors={[...ecbcolors, ...useSetting('color.palette')]}
                        onChange={(value) => setAttributes({ stripeBg: value })}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    )
};

export default Controls;