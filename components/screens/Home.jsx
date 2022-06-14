import { useNavigation } from '@react-navigation/native'
import { View, } from 'react-native'
import SolidButton from '../common/SolidButton'
import styles from './Home.styles'
import Title from '../common/Title'

export default function Home() {
  const navigation = useNavigation()
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
      <Title>Aprende con Figgy</Title>
      <SolidButton label="Sobre nosotros" onPress={handleToIntro} />
      <SolidButton label="Equipo basico" onPress={handleToEquipobasico} />
      <SolidButton label="Tipos De Fotos" onPress={handleToTiposDeFotos} />
      <SolidButton label="Compra Premium" />
    </View>
  )
}
