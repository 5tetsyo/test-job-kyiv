import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/ApiService.service";

@Component({
    selector: 'navBar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {
    response:any;
    values = {
        USD: 1,//this.srv.response.results.USD || 30,
        EUR: 2,//this.srv.response.results.EUR || 30,
        PLN: 3,//this.srv.response.results.PLN || 30,
        GBP: 4,//this.srv.response.results.GBP ||30,
        UAH: 5//this.srv.response.results.UAH || 30
    }
    constructor(private srv: ApiService) {}
    ngOnInit(): void {
        this.srv.getResponse().subscribe(data => this.response=data)
    }
}