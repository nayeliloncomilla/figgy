import { ImageBackground, View } from 'react-native';
import SolidButton from '../../common/SolidButton'
import styles from './Premium.styles'

export default function Premium() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/premium.jpg')}
        resizeMode="cover"
        style={styles.Image}
      >
        <SolidButton label="Pro US $1,0 one month" />
        <SolidButton label="Pro US $3,0 three month" />
        <SolidButton label="Pro US $5,0 one year" />
      </ImageBackground>
    </View>
  )
}
