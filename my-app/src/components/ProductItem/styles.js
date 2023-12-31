import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
Wrapper.displayName = 'ProductItemWrapper';

export const Item = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background-color: #1E90FF;
`;
Item.displayName = 'Item';

export const Title = styled.div`
    a {
        color: #000080;
        font-weight: bolder;
    }
`;