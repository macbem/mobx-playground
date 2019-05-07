import { observable } from 'mobx';
import { getRandomInt } from '../../utils';

export interface ITodoModelPayload {
  description: string,
  finished: boolean,
}

export class TodoModel {
  id: number = getRandomInt();

  @observable description: string;
  @observable finished: boolean;

  constructor({ description, finished }: ITodoModelPayload) {
    this.description = description;
    this.finished = finished;
  }
}
