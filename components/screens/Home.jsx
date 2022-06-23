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

  const handleToPremium = () => {
    navigation.navigate('Premium')
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/home.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>{`hola ${user.email}`}</Text>
        <SolidButton label="Sobre nosotros" onPress={handleToIntro} />
        <SolidButton label="Equipo basico" onPress={handleToEquipobasico} />
        <SolidButton label="Tipos De Fotos" onPress={handleToTiposDeFotos} />
        <SolidButton label="Compra Premium" onPress={handleToPremium} />
        <SolidButton label="Cerrar sesión" onPress={clearSession} />
      </ImageBackground>
    </View>
  )
}
