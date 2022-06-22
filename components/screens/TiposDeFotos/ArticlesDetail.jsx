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
      <Text styles={styles.text}>
        Tipo de foto
        {article?.id}
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
    flex: 1,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
  }

})
