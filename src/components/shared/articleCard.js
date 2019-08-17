import React from 'react';
import styled from 'styled-components';
import ProTypes from 'prop-types';

const ArticleCard = ({ main }) => {

    return main ?
        (
            <div>main post</div>
        ) :
        (
            <div>regular post</div>
        )
};

ArticleCard.ProTypes = {
    main: ProTypes.bool
}

export default ArticleCard;

