import { List } from './lists.model';
export interface Card {
  id: string;
  title: string;
  description: string;
  position: number;
  list: List;
}

export interface UpdateCardDto {
  id?: string;
  title?: string;
  description?: string;
  position?: number;
  listId?: string | number;
  boardId?: string;
}
