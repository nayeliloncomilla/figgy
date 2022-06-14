import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Intro from './components/screens/Intro'
import Registro from './components/screens/Registro';
import Equipobasico from './components/screens/Equipobasico';
import TiposDeFotos from './components/screens/TiposDeFotos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Equipobasico" component={Equipobasico} />
        <Stack.Screen name="TiposDeFotos" component={TiposDeFotos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
