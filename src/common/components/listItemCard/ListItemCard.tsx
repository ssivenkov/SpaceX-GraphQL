import { Container, EmptyImage, Image, Title } from './styles';
import { ListItemCardPropsType } from './types';

export const ListItemCard = (props: ListItemCardPropsType) => {
  const { image, name } = props;

  return (
    <Container>
      {name && image ? <Image alt={name} src={image} /> : <EmptyImage />}
      {name && <Title>{name}</Title>}
    </Container>
  );
};
