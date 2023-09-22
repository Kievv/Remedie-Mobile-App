import Home from "../screens/Home";
import Remedios from "../screens/Remedios";
import Consultas from "../screens/Consultas";
import Exames from "../screens/Exames";
import Login from "../screens/Login/Login";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouseMedical,
  faNotesMedical,
  faPrescriptionBottleMedical,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegisterUser from "../screens/RegisterUser/RegisterUser";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

const { Navigator, Screen } = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#007AFF",
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#007AFF",
        },
        headerTitleStyle: {
          fontSize: 32,
        },
        headerTitle: (title = "Remedie"),
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesomeIcon icon={faHouseMedical} size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Remédios"
        component={Remedios}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesomeIcon
              icon={faPrescriptionBottleMedical}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Consultas"
        component={Consultas}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesomeIcon icon={faNotesMedical} size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Exames"
        component={Exames}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesomeIcon icon={faStethoscope} size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Screen
        name="Register"
        component={RegisterUser}
        options={{
          headerShown: true,
          tabBarItemStyle: { display: "none" },
        }}
      />

      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Navigator>
  );
}
