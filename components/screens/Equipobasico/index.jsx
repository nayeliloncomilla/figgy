import {
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  ScrollView,
  SafeAreaView
} from 'react-native';
import styles from './Equipobasico.styles'
import Title from '../../common/Title';

export default function Equipobasico() {
  return (
    <SafeAreaView style={style.container}>
      <ImageBackground source={require('../../../assets/ebasic.jpg')} resizeMode="cover" style={style.image}>
        <ScrollView style={style.container}>
          <Title>Equipo Basico</Title>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1624913503273-5f9c4e980dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
            style={{ width: '100%', height: 254 }}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1560367918-bed51f9dff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=941&q=80' }}
            style={{ width: '100%', height: 254 }}
          />
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {' '}
            Nulla et commodo dui, non pulvinar felis. Aenean pulvinar,
            {' '}
            mi rutrum eleifend iaculis, sapien diam posuere est, non eleifend felis mauris quis eros
          </Text>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1480365501497-199581be0e66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
            style={styles.image}
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
