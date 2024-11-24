
import Controls from './controls';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
import InternalLink from '../../components/internalLink';
import RightArrow from '../../components/rightArrow';

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
	const {
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
	const invertedTextClass = invertTextColors ? 'ecb-light-text' : 'ecb-dark-text';

	const blockProps = useBlockProps({
		className: `ecb-blocks-layout wp-block-ecb-blocks-vertical-stripes-grid ${invertedTextClass}`
	});
	return (
		<div {...blockProps}>
			<div className="content" style={{ background: stripeOneBgColor }}>
				<div style={{ background: contentBgColor }}>
					<h1>{parseString(headline)}</h1>
					<h2>{parseString(subheadline)}</h2>
					<a href='#' class="arrow-button">{parseString(linkText)}<span><RightArrow/></span></a>
				</div>
			</div>
			<div className="grid">
				<img src={validateAndEncodeURL(highlightedPhoto)} />
				<div style={{ background: stripeThreeBgColor }}>
					<p>{parseString(sidequote)}</p>
				</div>
			</div>
			<Controls {...props} />
		</div>
	);
}