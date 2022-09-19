import { Ship } from 'apollo/generated/schema';

export type ListItemCardPropsType = {
  name: Ship['name'];
  image: Ship['image'];

  linkTo?: string;
};
