import { ImageBackground, View } from 'react-native';
import styles from './Intro.style'
import Title from '../../common/Title';

export default function Intro() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/fondogorrito.jpg')}
        resizeMode="cover"
        style={styles.Image}
      >
        <Title>Sobre Nosotros</Title>
      </ImageBackground>
    </View>
  )
}
