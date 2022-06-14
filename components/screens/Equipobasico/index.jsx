import { View, StyleSheet, ImageBackground } from 'react-native';

import Title from '../../common/Title';

export default function Equipobasico() {
  return (
    <View style={style.container}>
      <ImageBackground source={require('../../../assets/fondogorrito.jpg')} resizeMode="cover" style={style.image}>
        <Title>Equipo Basico</Title>
      </ImageBackground>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
});
