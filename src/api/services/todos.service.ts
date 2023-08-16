import { BaseService, ServiceRoutes } from "..";
import { ITodo } from "../../models";

export type Todos = ITodo[];

export class TodosService extends BaseService {
  async loadTodos(): Promise<Todos> {
    return super.requestGet<Todos>(ServiceRoutes.TODOS_LIST);
  }
}
