import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CounterService{
    countervalue:number = 1;
    increment(){
        this.countervalue +1
    }
    decrement(){
        this.countervalue -1
    }
}