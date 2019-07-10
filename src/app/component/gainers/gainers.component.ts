import { Component, OnInit } from '@angular/core';

import Gainers from '../../model/gainers';
import GainersService from '../../service/gainers.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css'],
  providers: [GainersService]
})
export class GainersComponent implements OnInit {

    gainers: any;

  	constructor(private gainersService: GainersService) {   
  	}
  
  	ngOnInit() {
  		this.gainers = this.getAll();
  	}
  		
  	getAll()
  	{  		
  		this.gainersService.getAll().subscribe(data => {  			 			
    		this.gainers = data.mostGainerStock;
    	});
  	}

}
