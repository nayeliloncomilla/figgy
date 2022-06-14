import { View } from 'react-native';
import Title from '../../common/Title';

const articles = {
  data: [
    {
      id: 1,
      attributes: {
        title: 'hola',
        description: 'oaboriscomotas?',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'
      }
    },
    {
      id: 2,
      attributes: {
        title: 'hola',
        description: 'oaboriscomotas?',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'
      }
    },
    {
      id: 3,
      attributes: {
        title: 'hola',
        description: 'oaboriscomotas?',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/f246b58/2147483647/strip/true/crop/2048x1108+0+0/resize/840x454!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'
      }
    }
  ]
}
export default function TiposDeFotos() {
  return (
    <View>
      <Title>Tipos de Fotos</Title>
    </View>
  )
}
