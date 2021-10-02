import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
// import Logo from '../assets/logo.png';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin(!isLogin);
    }
 
    return (
        <View style={styles.view}>

           <Image style={{width: 340, height: 220, marginTop: 20, marginBottom: 30, marginLeft:20, marginRight: 20}} source={require('../assets/logo.png')} />
           {isLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    // logo: {
    //     // width: 66,
    //     // height: 58,
    //     // marginTop: 50,
    //     // marginBottom: 50,
    //     // alignSelf: 'center',
    // }
});
