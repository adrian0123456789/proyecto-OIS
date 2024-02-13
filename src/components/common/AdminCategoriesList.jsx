import styled from 'styled-components';
import AdminCategories from './AdminCategories';
import AdminCategoriesInfo from './AdminCategoriesItem';
import AdminCategoriesItem from './AdminCategoriesItem';

const newProgram = [
  {
    id: 1,
    title: 'Estudios de Economía',
    img: 'https://s3-alpha-sig.figma.com/img/dd24/d275/63ae472558fb8a1803b5cb725e8e9d03?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKfSl9wMHIxePk1trJA1HaNhyE3XwN6EuLPPheY8iPSi8OkI1hUgaRxpoLunAu-FuWHtx-puMvjP1KI3djQixJyEiHQNKHmA1kYH6HzaIRn1CxoB0RYwhQ6~-GZfRuQUkqVQO-fQ6L6HhoZl~SIQ~ThUXhnUzVM7KuFS83hiXQgczX5yboXsZHfzAqi8PYBDIiZq8s4yu4Xaa5elRFaZM4XgrQJwk4GIh21S8G-eUeb-SdNMavmuglUHgRJ2-pMFrJDQywgvC5MSIGDi1kzlVOXRj388U-QZfNhb6cTBx7Wp2ClB-nSkWm4XDdWj52k5Tr-r5Jumbe2~lUHEAtQS8g__',
    info: 'Máster en Alta Dirección Empresarial (MBA)',
    duration: '42Horas',
    price: '7,000',
    cargo: 'Master',
  },
  {
    id: 2,
    title: 'Estudios de Economía',
    img: 'https://s3-alpha-sig.figma.com/img/dd24/d275/63ae472558fb8a1803b5cb725e8e9d03?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKfSl9wMHIxePk1trJA1HaNhyE3XwN6EuLPPheY8iPSi8OkI1hUgaRxpoLunAu-FuWHtx-puMvjP1KI3djQixJyEiHQNKHmA1kYH6HzaIRn1CxoB0RYwhQ6~-GZfRuQUkqVQO-fQ6L6HhoZl~SIQ~ThUXhnUzVM7KuFS83hiXQgczX5yboXsZHfzAqi8PYBDIiZq8s4yu4Xaa5elRFaZM4XgrQJwk4GIh21S8G-eUeb-SdNMavmuglUHgRJ2-pMFrJDQywgvC5MSIGDi1kzlVOXRj388U-QZfNhb6cTBx7Wp2ClB-nSkWm4XDdWj52k5Tr-r5Jumbe2~lUHEAtQS8g__',
    info: 'Máster en Alta Dirección Empresarial (MBA)',
    duration: '42Horas',
    price: '7,000',
    cargo: 'Curse',
  },
  {
    id: 3,
    title: 'Estudios de Computo',
    img: 'https://s3-alpha-sig.figma.com/img/dd24/d275/63ae472558fb8a1803b5cb725e8e9d03?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKfSl9wMHIxePk1trJA1HaNhyE3XwN6EuLPPheY8iPSi8OkI1hUgaRxpoLunAu-FuWHtx-puMvjP1KI3djQixJyEiHQNKHmA1kYH6HzaIRn1CxoB0RYwhQ6~-GZfRuQUkqVQO-fQ6L6HhoZl~SIQ~ThUXhnUzVM7KuFS83hiXQgczX5yboXsZHfzAqi8PYBDIiZq8s4yu4Xaa5elRFaZM4XgrQJwk4GIh21S8G-eUeb-SdNMavmuglUHgRJ2-pMFrJDQywgvC5MSIGDi1kzlVOXRj388U-QZfNhb6cTBx7Wp2ClB-nSkWm4XDdWj52k5Tr-r5Jumbe2~lUHEAtQS8g__',
    info: 'Máster en Alta Dirección Empresarial (MBA)',
    duration: '42Horas',
    price: '7,000',
    cargo: 'Curse EHS Online',
  },
  {
    id: 4,
    title: 'Estudios de Economía',
    img: 'https://s3-alpha-sig.figma.com/img/dd24/d275/63ae472558fb8a1803b5cb725e8e9d03?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XKfSl9wMHIxePk1trJA1HaNhyE3XwN6EuLPPheY8iPSi8OkI1hUgaRxpoLunAu-FuWHtx-puMvjP1KI3djQixJyEiHQNKHmA1kYH6HzaIRn1CxoB0RYwhQ6~-GZfRuQUkqVQO-fQ6L6HhoZl~SIQ~ThUXhnUzVM7KuFS83hiXQgczX5yboXsZHfzAqi8PYBDIiZq8s4yu4Xaa5elRFaZM4XgrQJwk4GIh21S8G-eUeb-SdNMavmuglUHgRJ2-pMFrJDQywgvC5MSIGDi1kzlVOXRj388U-QZfNhb6cTBx7Wp2ClB-nSkWm4XDdWj52k5Tr-r5Jumbe2~lUHEAtQS8g__',
    info: 'Máster en Alta Dirección Empresarial (MBA)',
    duration: '42Horas',
    price: '7,000',
    cargo: 'Master',
  },
];

const AdminCategoriesList = () => {
  return (
    <div>
      {newProgram.map(program => (
        <AdminCategoriesItem key={program.id} program={program} />
      ))}
    </div>
  );
};

export default AdminCategoriesList;
