
import Controls from './controls';
import parseString from '../../lib/helpers/parseString';
import validateAndEncodeURL from '../../lib/helpers/validateAndEncodeURL';
import InternalLink from '../../components/internalLink';
import CheckCircle from '../../components/checkCircle';

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
			linkFour
		}
	} = props;
	const blockProps = useBlockProps({
		className: `ecb-blocks-layout wp-block-ecb-blocks-verticalgrid-multilink`
	});
	return (
		<div {...blockProps}>
			<div className="content" style={{ background: stripeBg }}>
				<h2>{parseString(subheadline)}</h2>
				<a href={validateAndEncodeURL(link)} target="_blank">
					<h1>
						{parseString(linkText)}
						<span><InternalLink /></span>
					</h1>
				</a>
			</div>
			<div className="grid" style={{background: mainBgColor}}>
				<div>
					<a href={validateAndEncodeURL(linkOne)} target="_blank">
						<img src={validateAndEncodeURL(photo)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkTwo)} target="_blank">
						<img src={validateAndEncodeURL(photoTwo)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkThree)} target="_blank">
						<img src={validateAndEncodeURL(photoThree)} />
					</a>
				</div>
				<div>
					<a href={validateAndEncodeURL(linkFour)} target="_blank">
						<img src={validateAndEncodeURL(photoFour)} />
					</a>
				</div>
			</div>
			<Controls {...props} />
		</div>
	);
}