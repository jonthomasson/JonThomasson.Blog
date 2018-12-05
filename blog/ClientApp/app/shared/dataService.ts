import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Post } from "./post";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {

    }
    
    public posts: Post[] = [];

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

}