import { View, ImageBackground, ToastAndroid } from 'react-native'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './Registro.styles'
import FormInput from '../../common/FormInput'
import SolidButton from '../../common/SolidButton'
import Title from '../../common/Title';

export default function Registro() {
  const { control, handleSubmit } = useForm()
  const navigation = useNavigation()

  const onSubmit = async (values) => {
    try {
      await axios.post('https://figgy-api.herokuapp.com/api/auth/local/register', {
        username: values.email,
        email: values.email,
        password: values.password

      })
      ToastAndroid.show('Usuario registrado', ToastAndroid.SHORT)
      navigation.goBack()
    } catch (e) {
      ToastAndroid.show(e.response.data.error.message, ToastAndroid.SHORT)
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/fondogorrito.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
        <Title>Registrar</Title>
        <FormInput label="Email" control={control} name="email" />
        <FormInput label="Password" control={control} name="password" />
        <SolidButton label="Registrar" onPress={handleSubmit(onSubmit)} />
      </ImageBackground>
    </View>
  )
}
