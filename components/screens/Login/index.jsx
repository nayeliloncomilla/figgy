import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  View,
  ImageBackground,
  ToastAndroid
} from 'react-native'
import axios from 'axios';
import FormInput from '../../common/FormInput'
import SolidButton from '../../common/SolidButton'
import styles from './Login.styles'
import { useAuth } from '../../context/AuthContext';
import loginFormSchema from './validations/loginFormSchema';

export default function Login() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(loginFormSchema)
  })

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
      <ImageBackground source={require('../../../assets/loginimg.jpg')} resizeMode="cover" style={styles.image}>
        <FormInput
          label="Email"
          control={control}
          name="email"
          error={formState.errors.email}
          autoCapitalize="none"
        />
        <FormInput
          label="Password"
          control={control}
          name="password"
          error={formState.errors.password}
          secureTextEntry
          autoCapitalize="none"
        />
        <SolidButton label="Ingresar" onPress={handleSubmit(onSubmit)} />
        <SolidButton label="Registrar" onPress={handleToRegister} />
      </ImageBackground>
    </View>
  )
}
