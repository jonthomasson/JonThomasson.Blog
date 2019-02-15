import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';

@Injectable()
export class HomeDataService {

    constructor(private http: HttpClient) {

    }


    contactMe(contact) {
        return this.http.post("/home/contactme", contact)
            .pipe(
                map((response: any) => {

                    return true;
                }));
    }

}