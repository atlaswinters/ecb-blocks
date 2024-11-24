import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
import InternalLink from '../../components/internalLink';
import RightArrow from '../../components/rightArrow';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({
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
}) {
	const invertedTextClass = invertTextColors ? 'ecb-light-text' : 'ecb-dark-text';

	const blockProps = useBlockProps.save({
		className: `ecb-blocks-layout wp-block-ecb-blocks-vertical-stripes-grid ${invertedTextClass}`
	});
	return (
		<div {...blockProps}>
			<div className="content" style={{ background: stripeOneBgColor }}>
				<div style={{ background: contentBgColor }}>
					<h1>{parseString(headline)}</h1>
					<h2>{parseString(subheadline)}</h2>
					<a href={validateAndEncodeURL(link)} class="arrow-button">{parseString(linkText)}<span><RightArrow/></span></a>
				</div>
			</div>
			<div className="grid">
				<img src={validateAndEncodeURL(highlightedPhoto)} />
				<div style={{ background: stripeThreeBgColor, }}>
					<p>{parseString(sidequote)}</p>
				</div>
			</div>
		</div>
	);
}
