import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/login/login";

const LoginNavigator = createStackNavigator({
    Login: LoginScreen,
}, {
    defaultNavigationOptions: {
        header: null,
    },
});

export default LoginNavigator;
