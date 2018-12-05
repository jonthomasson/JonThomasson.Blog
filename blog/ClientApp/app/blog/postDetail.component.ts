import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Post } from "../shared/post";

@Component({
    selector: "post-detail",
    templateUrl: "postDetail.component.html"
})
export class PostDetail implements OnInit {
    public post: Post;
    public postId: number = 2;

    constructor(private data: DataService) {
        this.post = data.post;
    }

    ngOnInit() {
        this.data.getPost(this.postId)
            .subscribe(success => {
                if (success) {
                    this.post = this.data.post;
                }
            });
    }
}