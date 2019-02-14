import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Injectable()
export class SharedDataService {

    constructor(private http: HttpClient) {

    }
    

    emailSubscribe(email) {
        return this.http.post("/blog/emailsubscribe", email)
            .pipe(
                map((response: any) => {
                    //let tokenInfo = response;
                    //this.token = tokenInfo.token;
                    //this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }

}