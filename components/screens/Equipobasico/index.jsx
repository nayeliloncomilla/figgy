import {
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';

import Title from '../../common/Title';

export default function Equipobasico() {
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground source={require('../../../assets/ebasic.jpg')} resizeMode="cover" style={style.image}>
        <ScrollView style={style.container}>
          <Title>Equipo Basico</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ width: '100%', height: 254 }}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ width: '100%', height: 254 }}
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={{ width: '100%', height: 254 }}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 240
  }
});
