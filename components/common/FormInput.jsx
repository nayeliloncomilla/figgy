import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Controller } from 'react-hook-form'
import defaultTheme from '../../config/theme';

export default function FormInput({
  label,
  name,
  control,
  error,
  autoCapitalize,
  keyboardType,
  secureTextEntry
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextInput
            selectionColor={defaultTheme.primary[500]}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            style={styles.input}
            onBlur={field.onBlur}
            onChangeText={field.onChange}
            value={field.value}
            secureTextEntry={secureTextEntry}
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
    marginBottom: 8,
    backgroundColor: '#FBF0F0',
  },
  label: {
    marginBottom: 4,
    color: '#FFFF',
  },
  errorText: {
    fontSize: 12,
    color: '#10E830',
    marginBottom: 2
  }
});
