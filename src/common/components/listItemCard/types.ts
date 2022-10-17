import { Ship } from 'apollo/generated/schema';
import { LAUNCHES, SHIPS } from 'common/constants/constants';

export type ListItemCardPropsType = {
  name: Ship['name'];
  image: Ship['image'];
  id: Ship['id'];
  sectionType: typeof LAUNCHES | typeof SHIPS;

  linkTo?: string;
};
