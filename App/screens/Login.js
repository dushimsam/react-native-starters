import React from 'react';
import LoginForm from "../../components/forms/Login"


const LoginScreen = ({ navigation}) =>{
    return(
        <View><LoginForm navigation={navigation}/></View>
    )
}
export default LoginScreen