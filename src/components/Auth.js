import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Logo from '../assets/logo.png';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin(!isLogin);
    }

    return (
        <View style={styles.view}>
            <Image style={styles.logo} source={Logo} />
            {isLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: "80%",
        height: 240,
        marginTop: 50,
        marginBottom: 50,
        // alignSelf: 'center',
    }
});