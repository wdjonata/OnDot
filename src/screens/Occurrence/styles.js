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
    margin-bottom: 20px;
    flex-direction: row;
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

export const DateTimeArea = styled.View`
    margin: 5px;
`;

export const BackButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
`;

export const AddButton = styled.TouchableOpacity`
    background-color: rgba(0, 0, 0, 0.2);
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    bottom: 20px;
    right: 20px;
    align-items: center;
    justify-content: center;
`;