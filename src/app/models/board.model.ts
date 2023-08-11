import { Colors } from './colors.model';
import { User } from './user.model';
import { List } from './lists.model';
import { Card } from './card.model';

export interface Board {
  id: string;
  title: string;
  backgroundColor: Colors;
  members: User[];
  lists: List[];
  cards: Card[];
}
