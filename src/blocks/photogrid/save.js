import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
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
		BgColor,
		leftPhoto,
		rightPhotoOne,
		rightPhotoTwo,
		headline,
		subheadline,
		excerpt,
		link,
		linkText
	}
}) {
	const blockProps = useBlockProps.save({
		className: "ecb-blocks-layout wp-block-ecb-blocks-photogrid"
	});
	return (
		<div {...blockProps}>
			<div className="grid">
				<div>
					<a href={validateAndEncodeURL(link)}>
						<img src={validateAndEncodeURL(leftPhoto)} />
					</a>
				</div>
				<div>
					<div>
						<a href={validateAndEncodeURL(link)}>
							<img src={validateAndEncodeURL(rightPhotoOne)} />
						</a>
					</div>
					<div>
						<a href={validateAndEncodeURL(link)}>
							<img src={validateAndEncodeURL(rightPhotoTwo)} />
						</a>
					</div>
				</div>
			</div>
			<div className="content" style={{ background: BgColor }}>
				<h1>{parseString(headline)}</h1>
				<h2>{parseString(subheadline)}</h2>
				<p>{parseString(excerpt)}</p>
				<a href={validateAndEncodeURL(link)} class="arrow-button">{parseString(linkText)} <span><RightArrow /></span></a>
			</div>
		</div>
	);
}
