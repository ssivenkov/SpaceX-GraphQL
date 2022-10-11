import { forwardRef, Ref, useContext, useLayoutEffect, useState } from 'react';

import { UserIDContext } from 'App';
import { LikeButton } from 'common/components/buttons/likeButton/LikeButton';
import { EmptyImage } from 'common/components/images/emptyImage/emptyImage';
import { IS_LIKED, USERS } from 'common/constants/constants';
import { child, get, ref as firebaseRef, set } from 'firebase/database';
import { database } from 'index';

import { Container, Image, StyledLink, Title } from './styles';
import { ListItemCardPropsType } from './types';

const ListItemCard = forwardRef(
  (props: ListItemCardPropsType, ref: Ref<HTMLDivElement>) => {
    const { image, name, linkTo, id, sectionType } = props;

    const userID = useContext(UserIDContext);

    const dbRef = firebaseRef(database);

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const onLikeClick = (id: ListItemCardPropsType['id'], isLiked: boolean) => {
      set(firebaseRef(database, `${USERS}/${userID}/${sectionType}/${id}`), {
        isLiked: !isLiked,
      }).then(() => {
        setIsLiked(!isLiked);
      });
    };

    useLayoutEffect(() => {
      get(child(dbRef, `${USERS}/${userID}/${sectionType}/${id}/${IS_LIKED}`)).then(
        (snapshot) => {
          const isLiked = !!snapshot.val();

          if (isLiked) {
            setIsLiked(true);
          }
        },
      );
    }, []);

    return (
      <Container ref={ref}>
        {name && image ? (
          <Image alt={name} src={image} />
        ) : (
          <EmptyImage height={200} width={200} />
        )}
        <Title>{name}</Title>
        {userID && (
          <LikeButton isLike={isLiked} onClick={() => onLikeClick(id, isLiked)} />
        )}
        {linkTo && <StyledLink to={linkTo}>View</StyledLink>}
      </Container>
    );
  },
);

ListItemCard.displayName = 'ListItemCard';

export default ListItemCard;
