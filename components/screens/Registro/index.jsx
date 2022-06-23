import { View, ImageBackground, ToastAndroid } from 'react-native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './Registro.styles'
import FormInput from '../../common/FormInput'
import SolidButton from '../../common/SolidButton'
import registerFormSchema from './validations/registroFormSchema';

export default function Registro() {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(registerFormSchema)
  })
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
        source={require('../../../assets/registerimg.jpg')}
        resizeMode="cover"
        style={styles.image}
      >
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
        <SolidButton label="Registrar" onPress={handleSubmit(onSubmit)} />
      </ImageBackground>
    </View>
  )
}
