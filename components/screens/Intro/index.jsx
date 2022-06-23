import { ImageBackground, View } from 'react-native';
import styles from './Intro.style'

export default function Intro() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/intro.jpg')}
        resizeMode="cover"
        style={styles.Image}
      />
    </View>
  )
}
