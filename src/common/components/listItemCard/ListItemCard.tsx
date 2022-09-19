import { forwardRef, Ref } from 'react';

import { EmptyImage } from 'common/components/images/emptyImage/emptyImage';

import { Container, Image, StyledLink, Title } from './styles';
import { ListItemCardPropsType } from './types';

const ListItemCard = forwardRef(
  (props: ListItemCardPropsType, ref: Ref<HTMLDivElement>) => {
    const { image, name, linkTo } = props;

    return (
      <Container ref={ref}>
        {name && image ? (
          <Image alt={name} src={image} />
        ) : (
          <EmptyImage height={200} width={200} />
        )}
        <Title>{name}</Title>
        {linkTo && <StyledLink to={linkTo}>View</StyledLink>}
      </Container>
    );
  },
);

ListItemCard.displayName = 'ListItemCard';

export default ListItemCard;
