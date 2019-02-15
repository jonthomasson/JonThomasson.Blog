import { Component, OnInit } from '@angular/core';
import { HomeDataService } from "../shared/home-data.service";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public contact = {
        name: "",
        email: "",
        subject: "",
        messageText: ""
    };
    constructor(private data: HomeDataService) { }


    onContact() {
        console.log(this.contact);
        this.data.contactMe(this.contact)
            .subscribe(success => {
                if (success) {
                   
                }
            });
    }

    ngOnInit() {
    }

}
