import React from 'react';
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

import HomeIcon from '../assets/home.svg'
import ListIcon from '../assets/list.svg'
import FingerPrintIcon from '../assets/fingerPrint.svg'
import TimeLapseIcon from '../assets/timelapse.svg'
import ProfileIcon from '../assets/person.svg'

const TabArea = styled(LinearGradient).attrs({
    colors: ['#011526', '#1BACE9']
})`
    height: 60px;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    alignItems: center;
    justifyContent: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    alignItems: center;
    justifyContent: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #025373;
    margin-top: -35px;
`;

export default ({ state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0? 1 : 0.5}} width="24"  height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Register')}>
                <ListIcon style={{opacity: state.index===1? 1 : 0.5}} width="24"  height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItemCenter onPress={() => goTo('PointRegister')}>
                <FingerPrintIcon style={{opacity: state.index===2? 1 : 0.5}} width="32"  height="32" fill="#4EADBE"/>
            </TabItemCenter>
            <TabItem onPress={() => goTo('HourBank')}>
                <TimeLapseIcon style={{opacity: state.index===3? 1 : 0.5}} width="24"  height="24" fill="#FFFFFF"/>
            </TabItem>
            <TabItem onPress={() => goTo('Profile')}>
                <ProfileIcon style={{opacity: state.index===4? 1 : 0.5}} width="24"  height="24" fill="#FFFFFF"/>
            </TabItem>
        </TabArea>
    )
};