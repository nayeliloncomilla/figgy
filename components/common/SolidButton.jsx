import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../../config/colors';
import defaultTheme from '../../config/theme';

export default function SolidButton({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  buttonContainer: {
    backgroundColor: defaultTheme.primary[500],
    paddingVertical: 8,
    paddingHorizontal: 80,
    borderRadius: 10,
    margin: 8,
    width: '85%'
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 18
  }
});
