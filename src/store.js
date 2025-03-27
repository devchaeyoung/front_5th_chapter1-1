import { MOCK_POSTS } from "./mockPosts";
import { user } from "./utils";

export const state = {
  loginState: !!user,
  posts: MOCK_POSTS,
  isHash: false,
};
