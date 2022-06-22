import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import {
  View,
  ImageBackground,
  ToastAndroid
} from 'react-native'
import axios from 'axios';
import FormInput from '../../common/FormInput'
import SolidButton from '../../common/SolidButton'
import Title from '../../common/Title'
import styles from './Login.styles'
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { control, handleSubmit } = useForm()
  const { startSession } = useAuth()
  const navigation = useNavigation()

  const onSubmit = async (values) => {
    try {
      const response = await axios.post('https://figgy-api.herokuapp.com/api/auth/local', {
        identifier: values.email,
        password: values.password
      })
      startSession(response.data)
      navigation.navigate('Home')
    } catch (e) {
      ToastAndroid.show(e.response.data.error.message, ToastAndroid.SHORT)
    }
  }

  const handleToRegister = () => {
    navigation.navigate('Registro')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/fondogorrito.jpg')} resizeMode="cover" style={styles.image}>
        <Title>Login</Title>
        <FormInput label="Email" control={control} name="email" />
        <FormInput label="Password" control={control} name="password" />
        <SolidButton label="Ingresar" onPress={handleSubmit(onSubmit)} />
        <SolidButton label="Registrar" onPress={handleToRegister} />
      </ImageBackground>
    </View>
  )
}
