import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import {
  View,
  ImageBackground,
} from 'react-native'

import FormInput from '../../common/FormInput'
import SolidButton from '../../common/SolidButton'
import Title from '../../common/Title'
import styles from './Login.styles'

export default function Login() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })
  const navigation = useNavigation()
  const onSubmit = (values) => {
    console.log(values)
    navigation.navigate('Home')
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
