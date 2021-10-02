import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { validateEmail } from "../utils/validations";
//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function RegisterForm(props) {
    const {changeForm} = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});
    const register = () => {
      let errors = {};
      if(!formData.email || !formData.password || !formData.repeatPassword) {
        if(!formData.email) errors.email = true;
        if(!formData.password) errors.password= true;
        if(!formData.repeatPassword) errors.repeatPassword= true;
      } else if(!validateEmail(formData.email)) {
        errors.email = true;
      } else if (formData.password !== formData.repeatPassword) {
        errors.password = true;
        errors.repeatPassword = true;
      } else {
        firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {console.log("Cuenta creada")})
        .catch(() => {
          setFormError({
            email: true,
            password: true,
            repeatPassword: true,
          });
        });
      }

      setFormError(errors);
      console.log(errors);
    }

    return (
        <>
        <ScrollView>
          {/* <KeyboardAwareScrollView> */}

            <TextInput 
              style={[styles.input, formError.email && styles.errorInput]}
              placeholder="Correo electrónico"
              placeholderTextColor="#969696"
              onChange={(e) => setFormData({
                ...formData,
                email: e.nativeEvent.text
              })}
            />
          
          {/* <KeyboardAwareScrollView> */}
            <TextInput 
              style={[styles.input, formError.password && styles.errorInput]}
              placeholder="Contraseña"
              placeholderTextColor="#969696"
              secureTextEntry={true}
              onChange={(e) =>
                setFormData({...formData, 
                password: e.nativeEvent.text
              })}
            />
          {/* </KeyboardAwareScrollView> */}
          {/* <KeyboardAwareScrollView> */}
            <TextInput 
              style={[styles.input, formError.repeatPassword && styles.errorInput]}
              placeholder="Repita contraseña"
              placeholderTextColor="#969696"
              secureTextEntry={true}
              onChange={(e) =>
                setFormData({...formData, 
                repeatPassword: e.nativeEvent.text
              })}
            />
            {/* </KeyboardAwareScrollView> */}
            {/* <Button title="Registrarse" /> */}
            {/* <KeyboardAwareScrollView> */}
            <TouchableOpacity onPress={register}>
                <Text style={styles.btnText}>Regístrate</Text>
            </TouchableOpacity> 
            <View style={styles.login}>
              <TouchableOpacity onPress={changeForm}>
                  <Text style={styles.btnText}>Inicia sesión</Text>
              </TouchableOpacity> 
            </View>
            {/* </KeyboardAwareScrollView> */}
          </ScrollView>
        </>
    )
}

function defaultValue() {
  return{
    email: '',
    password: '',
    repeatPassword: '',
  }
}

const styles = StyleSheet.create({
    btnText: {
      color: "#fff",
      fontSize: 18,
    },
    input: {
      height: 40,
      color: "#fff",
      width: "80%",
      marginBottom: 25,
      backgroundColor: "#1e3040",
      paddingHorizontal: 20,
      borderRadius: 50,
      fontSize: 18,
      borderWidth: 1,
      borderColor: "#1e3040",
    },
    login: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 10,
      alignContent: 'center',
    },
    errorInput: {
      borderColor: '#940c0c',
    }
})
