import { Ship } from 'apollo/generated/schema';

export type ShipCardPropsType = {
  image?: Ship['image'];
  name?: Ship['name'];
};
