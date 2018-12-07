import { Component, OnInit } from "@angular/core";
import { DataService } from "../../shared/dataService";
import { Post } from "../shared/post";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "post-detail",
    templateUrl: "post-detail.component.html"
})
export class PostDetailComponent implements OnInit {
    public post: Post;
    public postId: string = '';

    constructor(private data: DataService, private route: ActivatedRoute) {
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