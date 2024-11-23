const parseString = ( string ) => {
    return string.toString().replace( /(<([^>]+)>)/ig, '');
}
export default parseString;