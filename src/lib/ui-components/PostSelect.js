import AsyncSelect from 'react-select/async';
import findPost from '../helpers/findPost';

const PostSelect = ( props ) => {
    const getOptions = (input, callback) => {
        findPost(input).then( response => {
            let posts = response.map( post => {
                return { 
                    value: post, 
                    label: post.title,
                }
            });
            return callback(posts);
        });
    } 
    return (
        <AsyncSelect
            value=""
            cacheOptions
            defaultOptions
            isClearable
            onChange = { (value) => {
                props.onChange( value );
            } }
            loadOptions={getOptions} 
        />
    );      
}    
export default PostSelect;