import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 50%;
    column-gap: 15px;
    row-gap: 15px;
    margin-top: 10px;
`