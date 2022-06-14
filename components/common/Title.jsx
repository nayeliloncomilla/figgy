import { Text, StyleSheet } from 'react-native';

export default function Title({ children }) {
  return (
    <Text style={style.title}>{children}</Text>
  )
}

const style = StyleSheet.create({
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }

});
