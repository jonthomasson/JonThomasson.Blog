import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Post } from "../shared/post";
import { Router } from "@angular/router";


@Component({
    selector: "posts-list",
    templateUrl: "postsList.component.html",
})
export class PostsList implements OnInit {
    public posts: Post[];
    private numPosts: number = 5;

    constructor(private data: DataService) {
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