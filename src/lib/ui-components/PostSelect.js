import AsyncSelect from 'react-select/async';
import getPosts from '../helpers/getPosts';


const PostSelect = ( props ) => {
    const getOptions = (input, callback) => {
        let postOptions = {
            postType: 'posts',
            params: 'search=' + input + '&per_page=5' 
        }
        getPosts(postOptions).then( response => {
            let posts = response.map( post => {
                return { 
                    value: post, 
                    label: post.title.rendered,
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