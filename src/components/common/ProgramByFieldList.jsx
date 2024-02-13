import styled from 'styled-components';
import ProyectoOIS from '../ProyectoOIS';
import ProgramByField from './ProgramByField';

const matter = [
  {
    id: 1,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios de Tecnología',
  },
  {
    id: 2,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios de Ingeniería',
  },
  {
    id: 3,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Ciencias Sociales',
  },
  {
    id: 4,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios de gestión',
  },
  {
    id: 5,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios Empresariales',
  },
  {
    id: 6,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios de Economía',
  },
  {
    id: 7,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Estudios de Humanidades',
  },
  {
    id: 8,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Ciencias Naturales',
  },
  {
    id: 9,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Cuidado de la salud',
  },
  {
    id: 10,
    img: 'https://s3-alpha-sig.figma.com/img/470c/ce16/c69ac4a670230aedc59628206e10f25d?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SgQ9mSZ1gxvAWo8jPq4GWOR3XU4H8stXKcpxeoB9LbimnornxEE~KFFnpqwO3jD6j8~v8nOFMMalGQtevdGgzhlmOxrq5gt1J4NOeGSkND8wCUsU~fL0Cd0XS-TyMM8fxGNxBP7cCU6mWNk6Zee~hA73vsFQu0CdD8NVS9r1hH2XiA9N4ISqzFwbCk2hyl9f6p6USV1ldg-qlL35dBd-L5UyKBfmUvhuP6~GG6SrnwlhkyYXYSamOvI4xXxnqgLQRxoDjM9QKlAZDwke0pE1-vztGzBvWhgA97DhOHhhX7P16l5K4wz7WtaZM~0s2U9BokJ0sR21D65M2Gn07MAWbQ__',
    name: 'Educacion',
  },
];

const StyledProgramByFieldList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 40px;
  width: 100%;
`;

const ProgramByFieldList = () => {
  return (
    <StyledProgramByFieldList>
      {matter.map(element => (
        <ProgramByField key={element.id} name={element.name} img={element.img} />
      ))}
    </StyledProgramByFieldList>
  );
};

export default ProgramByFieldList;
