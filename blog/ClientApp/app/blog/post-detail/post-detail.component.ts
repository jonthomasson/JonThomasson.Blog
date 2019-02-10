import { Component, OnInit } from "@angular/core";
import { BlogDataService } from "../shared/blog-data.service";
import { Post } from "../shared/post";
import { Comment } from "../shared/comment";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "post-detail",
    templateUrl: "post-detail.component.html"
})
export class PostDetailComponent implements OnInit {
    public post: Post;
    public comment: Comment;
    public postId: string = '';

    constructor(private data: BlogDataService, private route: ActivatedRoute) {
        this.post = data.post;
        this.comment = new Comment();
    }
  
    onComment() {
        this.comment.postId = 2;
        this.data.postComment(this.comment)
            .subscribe(success => {
                if (success) {
                    //if (this.data.order.items.length == 0) {
                    //    this.router.navigate([""]);
                    //} else {
                    //    this.router.navigate(["checkout"]);
                    //}
                }
            });
    }

    ngOnInit() {
        this.postId = this.route.snapshot.paramMap.get('id');
        this.data.getPost(this.postId)
            .subscribe(success => {
                if (success) {
                    this.post = this.data.post;
                }
            });
    }
}