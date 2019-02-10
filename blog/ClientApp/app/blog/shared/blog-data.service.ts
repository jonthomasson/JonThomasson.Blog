import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Post } from "../../blog/shared/post";

@Injectable()
export class BlogDataService {

    constructor(private http: HttpClient) {

    }
    
    public posts: Post[] = [];
    public post: Post;

    loadPosts(): Observable<boolean> {
        return this.http.get("/api/posts")
            .pipe(
                map((data: any[]) => {
                    this.posts = data;
                    return true;
                }));
    }

    getLatest(numPosts): Observable<boolean> {
        let params = new HttpParams();
        params = params.append('numPosts', numPosts);

        return this.http.get("/api/posts/getLatest", { params })
            .pipe(
                map((data: any[]) => {
                    this.posts = data;
                    return true;
                }));
    }

    getPost(id): Observable<boolean> {
        return this.http.get("/api/posts/" + id) 
            .pipe(
                map((data: any) => {
                    this.post = data;
                    return true;
                }));
    }

    postComment(comment) {
        return this.http.post("/api/posts/addcomment", comment)
            .pipe(
                map((response: any) => {
                    //let tokenInfo = response;
                    //this.token = tokenInfo.token;
                    //this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }

}