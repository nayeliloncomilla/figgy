import { useRoute } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function ArticleDetail() {
  const { params } = useRoute()

  const article = params?.article
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: article?.attributes.image }}
        style={styles.image}
      />
      <Text styles={styles.title}>
        {article?.attributes.title}
      </Text>
      <Text style={styles.text}>
        {article?.attributes.description}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 24,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginHorizontal: 16
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginVertical: 24,
    textAlign: 'center',
    fontSize: 32,
    color: '#333',
    marginHorizontal: 16
  }

})
