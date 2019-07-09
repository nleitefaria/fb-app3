import { Component, OnInit } from '@angular/core';

import MostActives from '../../model/most-actives';
import MostActiveService from '../../service/most-active.service';

@Component({
  selector: 'app-most-active',
  templateUrl: './most-active.component.html',
  styleUrls: ['./most-active.component.css'],
  providers: [MostActiveService]
})
export class MostActiveComponent implements OnInit 
{
	mostActives: any;

  	constructor(private mostActiveService: MostActiveService) {   
  	}
  
  	ngOnInit() {
  		this.mostActives = this.getAll();
  	}
  		
  	getAll()
  	{  		
  		this.mostActiveService.getAll().subscribe(data => {  			
    		this.mostActives = data.mostActiveStock;
    	});
  	}
}