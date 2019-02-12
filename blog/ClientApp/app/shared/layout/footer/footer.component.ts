import { Component } from "@angular/core";

@Component({
    selector: "layout-footer",
    templateUrl: "footer.component.html"
})
export class FooterComponent {
    public emailSubscribe: string = '';

    constructor() {
        
    }

    onEmailSignup() {
        console.log(this.emailSubscribe);

        //this.data.postComment(this.comment)
        //    .subscribe(success => {
        //        if (success) {
        //            //if (this.data.order.items.length == 0) {
        //            //    this.router.navigate([""]);
        //            //} else {
        //            //    this.router.navigate(["checkout"]);
        //            //}
        //        }
        //    });
    }

}