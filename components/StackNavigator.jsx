import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Login from './screens/Login'
import Intro from './screens/Intro'
import Registro from './screens/Registro';
import Equipobasico from './screens/Equipobasico';
import TiposDeFotos from './screens/TiposDeFotos';
import ArticleDetail from './screens/TiposDeFotos/ArticlesDetail';
import { useAuth } from './context/AuthContext';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const { isLoggedIn } = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Equipobasico" component={Equipobasico} />
            <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
            <Stack.Screen name="TiposDeFotos" component={TiposDeFotos} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
