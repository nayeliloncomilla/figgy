import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import ArticleItem from './ArticleItem';

export default function TiposDeFotos() {
  const navigation = useNavigation()

  const handleNavigateToDetail = (article) => {
    navigation.navigate('ArticleDetail', { article })
  }

  const [articles, setArticles] = useState()

  useEffect(() => {
    axios
      .get('https://figgy-api.herokuapp.com/api/articles/')
      .then((response) => {
        setArticles(response.data.data)
      })
  }, [])

  return (
    <View style={style.container}>
      {articles ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={articles}
          renderItem={({ item }) => (
            <ArticleItem
              item={item}
              onPress={() => handleNavigateToDetail(item)}
            />
          )}
        />
      ) : null}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF'
  }
});
