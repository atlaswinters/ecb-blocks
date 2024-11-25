import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
import InternalLink from '../../components/internalLink';
import CheckCircle from '../../components/checkCircle';
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
export default function save(props) {
	const {
		attributes: {
			stripeBg,
			mainBgColor,
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
			linkFour,
		}
	} = props;
	const blockProps = useBlockProps.save({
		className: `ecb-blocks-layout wp-block-ecb-blocks-verticalgrid-multilink`
	});
	return (
		<div {...blockProps}>
			<div className="content" style={{ background: stripeBg }}>
				<h2>{parseString(subheadline)}</h2>
				<a href={validateAndEncodeURL(link)}>
					<h1>
						{parseString(linkText)}
						<span><InternalLink /></span>
					</h1>
				</a>
			</div>
			<div className="grid" style={{background: mainBgColor}}>
				<div>
					<a href={validateAndEncodeURL(linkOne)}>
						<img src={validateAndEncodeURL(photo)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkTwo)}>
						<img src={validateAndEncodeURL(photoTwo)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkThree)}>
						<img src={validateAndEncodeURL(photoThree)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkFour)}>
						<img src={validateAndEncodeURL(photoFour)} />
					</a>
				</div>
			</div>
		</div>
	);
}
