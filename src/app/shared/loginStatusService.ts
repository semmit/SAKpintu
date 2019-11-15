import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class loginStatusService {

    private statusSource = new BehaviorSubject<boolean>(false);
    currentStatus = this.statusSource.asObservable();

    constructor() { }

    changeStatus(val: boolean) {
        this.statusSource.next(val)
    }

}
