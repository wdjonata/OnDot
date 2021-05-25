import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.View`
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const HeaderTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;

export const ListArea = styled.View`
    flex: 1;
    margin-top: 30px;
`;

export const TotalArea = styled.View`
    height: 70px;
    background-color: #004561;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    border-radius: 6px;
`;

export const TextTotal = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const TimeTotal = styled.Text`
    font-size: 20px;
    color: #FFF;
`;