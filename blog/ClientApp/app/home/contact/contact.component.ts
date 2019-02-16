import { Component, OnInit } from '@angular/core';
import { HomeDataService } from "../shared/home-data.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    public contact = {
        name: "",
        email: "",
        subject: "",
        messageText: ""
    };

    constructor(private data: HomeDataService) { }


    onContactMe() {
        this.data.contactMe(this.contact)
            .subscribe(success => {
                if (success) {
                   
                }
            });
    }

    

}
