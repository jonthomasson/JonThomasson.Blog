import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Post } from "../shared/post";

@Component({
    selector: "posts-list",
    templateUrl: "postsList.component.html",
})
export class PostsList implements OnInit {
    public posts: Post[];

    constructor(private data: DataService) {
        this.posts = data.posts;
    }

    ngOnInit() {
        this.data.loadPosts()
            .subscribe(success => {
                if (success) {
                    this.posts = this.data.posts;
                }
            });
    }
}