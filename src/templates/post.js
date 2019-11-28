import React from 'react';
import Layout from "../components/layout";


const PostTemplate = ({data, location}) => {
    console.log(data, location);

    return (
        <Layout>
        <p>post page</p>
        </Layout>
    )
}

/* PostTemplate.propTypes = {

} */

export default PostTemplate;