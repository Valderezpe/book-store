import styled from "styled-components";

export const CustomText = styled.Text`
    font-size: 20px;
    color: ${({color }) => color || 'white' }
    font-weight: bold;
    margin-top:15px
`;