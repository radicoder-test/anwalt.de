import { BaseService, ServiceRoutes } from "..";
import { IPost } from "../../models";

export type Posts = IPost[];

export class PostsService extends BaseService {
  async loadPosts(): Promise<Posts> {
    return super.requestGet<Posts>(ServiceRoutes.POSTS_LIST);
  }
}
