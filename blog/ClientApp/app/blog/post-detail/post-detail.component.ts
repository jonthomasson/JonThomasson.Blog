import { Component, OnInit } from "@angular/core";
import { BlogDataService } from "../shared/blog-data.service";
import { Post } from "../shared/post";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "post-detail",
    templateUrl: "post-detail.component.html"
})
export class PostDetailComponent implements OnInit {
    public post: Post;
    public postId: string = '';

    constructor(private data: BlogDataService, private route: ActivatedRoute) {
        this.post = data.post;
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