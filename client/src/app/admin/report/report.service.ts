import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ReportService {
    private _dataUri = environment.apiUrl;
    constructor(private _http: HttpClient) { }
    getReports() {
        return this._http.post<any>(`${this._dataUri}/api/transactions/report`, {
            "fromDate": "2018-01-01",
            "toDate": "2019-12-12"
        }).pipe(
            map(response => {
                return {
                    records: response.response,
                    metadata: {
                        totalItem: response.response.length
                    }
                }
            })
        )
    }

}