import styled from 'styled-components';
import Card from './card';
const data = [
  {
    title: 'Lizard',
    text: 'texos leorem',
    img: 'https://vevico.files.wordpress.com/2022/09/a.jpg?w=500',
  },
  {
    title: 'Lion',
    text: 'texos leorem',
    img: 'https://t1.ea.ltmcdn.com/es/posts/1/3/4/tipos_de_leones_nombres_y_caracteristicas_24431_600_square.jpg',
  },
  {
    title: 'Bear',
    text: 'texos leorem',
    img: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas/8448889-2-esl-MX/Demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas.jpg',
  },
  {
    title: 'cat',
    text: 'texos leorem',
    img: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas/8448889-2-esl-MX/Demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas.jpg',
  },
  {
    title: 'Bear',
    text: 'texos leorem',
    img: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas/8448889-2-esl-MX/Demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas.jpg',
  },
  {
    title: 'Bear',
    text: 'texos leorem',
    img: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas/8448889-2-esl-MX/Demuestran-los-habitos-canibales-de-los-osos-de-las-cavernas.jpg',
  },
];

const StyledListCard = styled.div`
  width: 1636px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  margin: 0 auto;
`;

const ListCard = () => {
  return (
    <StyledListCard>
      {data.map(item => (
        <Card key={item.title} info={item} />
      ))}
    </StyledListCard>
  );
};

export default ListCard;
