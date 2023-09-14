import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    gap: 10px;
    flex-wrap: wrap;
`
Wrapper.displayName = 'CategoryListWrapper';

export const CategoryItem = styled.div`
    background-color: #565656;
    color: white;
    border-radius: 10px;
    padding: 5px 6px;
    cursor: pointer;
`
CategoryItem.displayName = 'CategoryItem'