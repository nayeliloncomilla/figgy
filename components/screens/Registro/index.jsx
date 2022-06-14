import { View, ImageBackground } from 'react-native';
import { useForm } from 'react-hook-form'
import styles from './Registro.styles'
import FormInput from '../../common/FormInput';
import SolidButton from '../../common/SolidButton'
import Title from '../../common/Title';

export default function Registro() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  })

  const onSubmit = values => {
    console.log(values)
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
