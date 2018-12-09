import { Component, OnInit } from "@angular/core";
import { BlogDataService } from "../shared/blog-data.service";
import { Post } from "../shared/post";
import { Router } from "@angular/router";


@Component({
    selector: "posts-list",
    templateUrl: "posts-list.component.html",
})
export class PostsListComponent implements OnInit {
    public posts: Post[];
    private numPosts: number = 5;

    constructor(private data: BlogDataService) {
        this.posts = data.posts;
    }

    ngOnInit() {
        this.data.getLatest(this.numPosts)
            .subscribe(success => {
                if (success) {
                    this.posts = this.data.posts;
                }
            });
    }
}