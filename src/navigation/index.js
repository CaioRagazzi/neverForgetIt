import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginNavigator from "./login.navigator";

const SwitchNavigator = createSwitchNavigator({
    Login: LoginNavigator
});

export default createAppContainer(SwitchNavigator);
