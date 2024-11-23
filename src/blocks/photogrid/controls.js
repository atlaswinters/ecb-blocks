import PostSelect from '../../lib/ui-components/PostSelect';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';

const { InspectorControls, MediaUpload } = wp.blockEditor;
const { TextControl, Panel, PanelBody, More, Button } = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const Controls = ( props ) => {
    return (
        <InspectorControls>
            <Panel>
                <PanelBody title="Edit/Update Grid Photos" icon={ More } initialOpen={ false }>
                    <MediaUpload
                        onSelect={ ( media ) => {
                            props.setAttributes( { leftPhoto: validateAndEncodeURL( media.url )});
                        }}
                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                        value={ props.attributes.leftPhoto }
                        render={ ( { open } ) => (
                            <Button className="button" onClick={ open }>Update Left Image</Button>
                        )}
                    />
                    <MediaUpload
                        onSelect={ ( media ) => {
                            props.setAttributes( { rightPhotoOne: validateAndEncodeURL( media.url )});
                        }}
                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                        value={ props.attributes.rightPhotoOne }
                        render={ ( { open } ) => (
                            <Button className="button" onClick={ open }>Update Top Right Image</Button>
                        )}
                    />
                    <MediaUpload
                        onSelect={ ( media ) => {
                            props.setAttributes( { rightPhotoTwo: validateAndEncodeURL( media.url )});
                        }}
                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                        value={ props.attributes.rightPhotoTwo }
                        render={ ( { open } ) => (
                            <Button className="button" onClick={ open }>Update Bottom Right Image</Button>
                        )}
                    />
                </PanelBody>
            </Panel>
            <Panel>
                <PanelBody title="Edit Block Content" icon={ More } initialOpen={ false }>
                    <div>
                        <PostSelect
                            onChange={ ( selectedPost ) => {
                                if ( selectedPost.value ) {
                                    props.setAttributes( {
                                        selectedPostID: parseString(selectedPost.value.id),
                                        headline: parseString(selectedPost.value.title),
                                        excerpt:  parseString(selectedPost.value.excerpt),
                                        link: validateAndEncodeURL(selectedPost.value.url)
                                    });
                                }
                            }
                        }/>
                        <br/>
                    </div>
                    <TextControl
                        label='Headline'
                        value={parseString(props.attributes.headline)}
                        onChange={ (value) => {props.setAttributes({ headline: parseString( value ) })}}
                    />
                    <TextControl
                        label='Subheadline'
                        value={parseString(props.attributes.subheadline)}
                        onChange={ (value) => {props.setAttributes({ subheadline: parseString( value ) })}}
                    />
                    <TextControl
                        label='Excerpt'
                        value={parseString(props.attributes.excerpt)}
                        onChange={ (value) => {props.setAttributes({ excerpt: parseString( value ) })}}
                    />
                    <TextControl
                        label='CTA/Block Link'
                        value={encodeURI(props.attributes.link)}
                        onChange={ (value) => {props.setAttributes({ link: encodeURI( value ) })}}
                    />
                    <TextControl 
                        label='CTA/Block Link Text'
                        value={parseString(props.attributes.linkText)}
                        onChange={ (value) => {props.setAttributes({ linkText: parseString( value ) })}}
                    />
                </PanelBody>
            </Panel>
        </InspectorControls>
    )   
};

export default Controls;