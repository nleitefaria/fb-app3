import { Component, OnInit } from '@angular/core';

import Losers from '../../model/losers';
import LosersService from '../../service/losers.service';

@Component({
  selector: 'app-losers',
  templateUrl: './losers.component.html',
  styleUrls: ['./losers.component.css'],
  providers: [LosersService]
})
export class LosersComponent implements OnInit {

    losers: any;

  	constructor(private losersService: LosersService) {   
  	}
  
  	ngOnInit() {
  		this.losers = this.getAll();
  	}
  		
  	getAll()
  	{  		
  		this.losersService.getAll().subscribe(data => {  			 			
    		this.losers = data.mostLoserStock;  		
    	});
  	}

}
