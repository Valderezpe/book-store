import styled from "styled-components";

export const CustomText = styled.Text`
    font-size: ${({theme}) => theme.metrics.px(24)}px;
    color: ${({color, theme }) => color || theme.colors.light }
    margin-top: ${({theme}) => theme.metrics.px(15)}px;
    font-family: 'SourceSansPro_400Regular,';
`;