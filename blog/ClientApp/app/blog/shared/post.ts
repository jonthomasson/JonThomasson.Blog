import { PostTag } from "../shared/post-tag";

export interface Post {
    id: number;
    creationDate: Date;
    bodyHtml: string;
    bodyMd: string;
    title: string;
    photoName: string;
    photoNameThumb: string;
    pescription: string;
    postTags: PostTag[];
}