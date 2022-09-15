import { forwardRef, Ref } from 'react';

import { Container, EmptyImage, Image, Title } from './styles';
import { ListItemCardPropsType } from './types';

const ListItemCard = forwardRef(
  (props: ListItemCardPropsType, ref: Ref<HTMLDivElement>) => {
    const { image, name } = props;

    return (
      <Container ref={ref}>
        {name && image ? <Image alt={name} src={image} /> : <EmptyImage />}
        {name && <Title>{name}</Title>}
      </Container>
    );
  },
);

ListItemCard.displayName = 'ListItemCard';

export default ListItemCard;
