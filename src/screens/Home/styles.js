import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 10px;
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

export const DateTimeArea = styled.View`
    flex: 3;
    align-items: center;
    justify-content: center;
`;
export const ButtonArea = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const RegisterDayArea = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`;

export const RegisterDayTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const RegisterDayTitleArea = styled.View`
    width: 100%;
    justify-content: center;
    padding-left: 5px;
`;

export const RecentRegisterArea = styled.View`
    flex: 3;
    margin-bottom: 20px;
`;

export const TimeText = styled.Text`
    font-size: 60px;
    font-weight: bold;
    color: #FFF;
`;

export const DateText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const RecentRegisterTitle = styled.Text`
    color: #FFF;
    font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
    width: 180px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #004561;
    border-radius: 6px;

`;

export const ButtonText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
    padding: 10px
`;
