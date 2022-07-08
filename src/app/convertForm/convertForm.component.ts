import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/ApiService.service";

@Component({
    selector: 'convertForm',
    templateUrl: './convertForm.component.html',
    styleUrls: ['./convertForm.component.css']
})
export class ConvertForm implements OnInit {
    rates:any;
    constructor(private srv:ApiService) {}
    ngOnInit(): void {
        this.srv.getResponse().subscribe(data => this.rates=data)
    }
    firstInput = 0;
    secondInput = 0;
    selectRates = {
        firstSelect: 1,
        secondSelect: 1
    }
    setSelectRates(event:Event, select:number) {
        const rateValue = (<HTMLSelectElement>event.target).value  as string as keyof typeof this.rates.results;
        if (select ===1) {
            this.changeFirstInput(this.firstInput/this.selectRates.firstSelect*this.rates.results[rateValue])
            this.selectRates = {...this.selectRates, firstSelect: this.rates.results[rateValue]};
        } else if (select ===2) {
            this.changeSecondInput(this.secondInput/this.selectRates.secondSelect*this.rates.results[rateValue])
            this.selectRates = {...this.selectRates, secondSelect: this.rates.results[rateValue]};
        }
    }
    changeFirstInput(value:number) {
        if(isNaN(value)) {
            value = 0;
        }
        this.firstInput = value;
    };
    changeSecondInput(value:number) {
        if(isNaN(value)) {
            value = 0;
        }
        this.secondInput = value;
    };
    changeInputs(event:Event, input:number) {
        if (input === 1) {
            if ((this.selectRates).firstSelect === this.selectRates.secondSelect) {
                this.changeFirstInput(parseInt((<HTMLInputElement>event.target).value))
                this.changeSecondInput(parseInt((<HTMLInputElement>event.target).value)*1)
            } else {
                this.changeFirstInput(parseFloat((<HTMLInputElement>event.target).value))
                this.changeSecondInput(parseFloat((<HTMLInputElement>event.target).value)/this.selectRates.firstSelect*this.selectRates.secondSelect)
                //setInputs({...inputs, firstValue: event.target, secondValue: (event.target/this.selectRates.firstSelect*this.selectRates.secondSelect).toFixed(2)})
            }
        } else if (input === 2) {
            if (this.selectRates.firstSelect === this.selectRates.secondSelect) {
                this.changeSecondInput(parseInt((<HTMLInputElement>event.target).value))
                this.changeFirstInput(parseInt((<HTMLInputElement>event.target).value)*1)
            } else {
                this.changeSecondInput(parseFloat((<HTMLInputElement>event.target).value))
                this.changeFirstInput(parseFloat((<HTMLInputElement>event.target).value)/this.selectRates.secondSelect*this.selectRates.firstSelect)
            }
        }
    }
}