import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Controller } from 'react-hook-form'
import defaultTheme from '../../config/theme';
import colors from '../../config/colors';

export default function FormInput({
  label,
  name,
  control,
  error
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextInput
            style={styles.input}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      {error ? (<Text style={styles.errorText}>{error.message}</Text>) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  input: {
    borderWidth: 2,
    width: '100%',
    borderColor: defaultTheme.primary[500],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8
  },
  label: {
    marginBottom: 4
  },
  errorText: {
    fontSize: 12,
    color: colors.red[500],
    marginBottom: 2
  }
});
