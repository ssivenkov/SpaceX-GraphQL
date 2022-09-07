import { Container, EmptyImage, Image, Title } from './styles';
import { ShipCardPropsType } from './types';

export const ShipCard = (props: ShipCardPropsType) => {
  const { image, name } = props;

  return (
    <Container>
      {name && image ? <Image alt={name} src={image} /> : <EmptyImage />}
      {name && <Title>{name}</Title>}
    </Container>
  );
};
