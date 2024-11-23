import parseString from '../../lib/helpers/parseString';

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
		className: "ecb-blocks-layout wp-block-ecb-blocks-photogrid"
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
		<div className={blockProps.className}>
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
				<a href={encodeURI(props.attributes.link)} class="arrow-button">{props.attributes.linkText} <span>&#8702;</span></a>
			</div>
		</div>
	);
}
