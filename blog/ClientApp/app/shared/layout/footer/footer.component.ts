import { Component } from "@angular/core";
import { SharedDataService } from "../../shared-data.service";

@Component({
    selector: "layout-footer",
    templateUrl: "footer.component.html"
})
export class FooterComponent {
    public emailSubscribe = {
        email: ""
    };
    constructor(private data: SharedDataService) {
        
    }

    onEmailSubscribe() {
        this.data.emailSubscribe(this.emailSubscribe)
            .subscribe(success => {
                if (success) {
                    //if (this.data.order.items.length == 0) {
                    //    this.router.navigate([""]);
                    //} else {
                    //    this.router.navigate(["checkout"]);
                    //}
                }
            });
    }

}