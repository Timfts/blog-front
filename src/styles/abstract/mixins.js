import { css } from 'styled-components';


const mixins = {
    flexBetween: css`
        display:flex;
        justify-content:space-between;
        align-items:center;
    `,

    flexColumn: css`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
    `
}

export default mixins;