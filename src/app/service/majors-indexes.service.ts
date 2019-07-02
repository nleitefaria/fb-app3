import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import MajorIndexes from '../model/major-indexes';

@Injectable({
  providedIn: 'root'
})
export default class MajorsIndexesService {

    public API = 'https://financialmodelingprep.com/api/v3';
  	public ENDPOINT = `${this.API}/majors-indexes`;

  	constructor(private http: HttpClient) { }
  	  
  	getAll(): Observable<MajorIndexes> 
  	{
    	return this.http.get<MajorIndexes>(this.ENDPOINT);
  	} 
}
