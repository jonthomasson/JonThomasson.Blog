import { Tag } from "../shared/tag";

export interface PostTag {
    postId: number;
    tagId: number;
    tag: Tag;
}