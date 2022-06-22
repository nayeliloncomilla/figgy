import { useNavigation } from '@react-navigation/native'
import { View, ImageBackground, Text } from 'react-native'
import SolidButton from '../common/SolidButton'
import styles from './Home.styles'
import { useAuth } from '../context/AuthContext'

export default function Home() {
  const navigation = useNavigation()
  const { user, clearSession } = useAuth()

  const handleToIntro = () => {
    navigation.navigate('Intro')
  }

  const handleToEquipobasico = () => {
    navigation.navigate('Equipobasico')
  }

  const handleToTiposDeFotos = () => {
    navigation.navigate('TiposDeFotos')
  }

  return (
    <View style={styles.container}>
      <Text>{`hola ${user.email}`}</Text>
      <ImageBackground
        source={require('../../assets/fondocolores.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <SolidButton label="Sobre nosotros" onPress={handleToIntro} />
        <SolidButton label="Equipo basico" onPress={handleToEquipobasico} />
        <SolidButton label="Tipos De Fotos" onPress={handleToTiposDeFotos} />
        <SolidButton label="Compra Premium" />
        <SolidButton label="Cerrar sesión" onPress={clearSession} />
      </ImageBackground>
    </View>
  )
}
