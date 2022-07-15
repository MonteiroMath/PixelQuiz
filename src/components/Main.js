import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Custom Components
import IntroScreen from "./intro/IntroScreen";
import LoginScreen from "./login/LoginScreen";
import ForgotPasswordScreen from "./login/ForgotPassword/ForgotPassword";
import RegisterScreen from "./login/Register/RegisterScreen";

//Routes
import {
  HOME,
  INTRO,
  LOGIN,
  FORGOTPASSWORD,
  REGISTER,
} from "../../appData/routes/Routes";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={INTRO}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={INTRO} component={IntroScreen} />
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={FORGOTPASSWORD} component={ForgotPasswordScreen} />
        <Stack.Screen name={REGISTER} component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
