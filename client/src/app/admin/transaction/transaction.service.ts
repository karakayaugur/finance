import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TransactionService {
    private _dataUri = environment.apiUrl;
    constructor(private _http: HttpClient) { }
    getTransaction(query: { fromDate: string, toDate: string,status:string }) {        
        return this._http.post<any>(`${this._dataUri}/api/transaction/list`, query).pipe(
            map(response => {                
                return {
                    records: response.data,
                    metadata: {
                        totalPage: 0,
                        totalItem: response.data.length
                    }
                }
            })
        )
    }
}