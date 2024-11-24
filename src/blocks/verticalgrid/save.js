import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';

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
export default function save(props) {
	const blockProps = useBlockProps.save({
		className: "ecb-blocks-layout wp-block-ecb-blocks-vertical-stripes-grid"
	});
	return (
		<div {...blockProps}>
			<div className="content">
				<div>
					<h1>{parseString(props.attributes.headline)}</h1>
					<h2>{parseString(props.attributes.subheadline)}</h2>
					<a href={validateAndEncodeURL(props.attributes.link)} class="arrow-button">{parseString(props.attributes.linkText)}<span>&#8702;</span></a>
				</div>
			</div>
			<div className="grid">
				<img src={validateAndEncodeURL(props.attributes.highlightedPhoto)} />
				<div>
					<p>{parseString(props.attributes.sidequote)}</p>
				</div>
			</div>
		</div>
	);
}
