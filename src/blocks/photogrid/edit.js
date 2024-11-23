
import Controls from './controls';
import parseString from '../../lib/helpers/parseString';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {

	const blockProps = useBlockProps({
		className: 'ecb-blocks-layout wp-block-ecb-blocks-photogrid'
	});

	let leftPhoto = {
		backgroundImage: 'url(' + props.attributes.leftPhoto + ')'
	}
	let rightPhotoOne = {
		backgroundImage: 'url(' + props.attributes.rightPhotoOne + ')'
	}
	let rightPhotoTwo = {
		backgroundImage: 'url(' + props.attributes.rightPhotoTwo + ')'
	}
	return (
		<div {...blockProps}>
			<div className="grid">
				<div>
					<img src={props.attributes.leftPhoto} />
				</div>
				<div>
					<div>
						<img src={props.attributes.rightPhotoOne} />
					</div>
					<div>
						<img src={props.attributes.rightPhotoTwo} />
					</div>
				</div>
			</div>
			<div className="content">
				<h1>{parseString(props.attributes.headline)}</h1>
				<h2>{parseString(props.attributes.subheadline)}</h2>
				<p>{parseString(props.attributes.excerpt)}</p>
				<a href={encodeURI(props.attributes.link)} class="arrow-button">{props.attributes.linkText}<span>&#8702;</span></a>
			</div>
			<Controls {...props} />
		</div>
	);
}