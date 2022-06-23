import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'

export default function ArticleItem({ item, onPress }) {
  return (
    <TouchableOpacity
      style={style.container}
      onPress={onPress}
    >
      <Image style={style.image} source={{ uri: item.attributes.image }} />
      <Text style={style.title}>{item.attributes.title}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1
  },
  image: {
    borderRadius: 999,
    width: 96,
    height: 96
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 2,
    marginBottom: 8,
    flexDirection: 'row',
    borderRadius: 8,
    borderColor: '#8F95FB',
    backgroundColor: '#b3ecec'
  }

})
