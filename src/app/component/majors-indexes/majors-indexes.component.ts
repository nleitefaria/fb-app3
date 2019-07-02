import { Component, OnInit } from '@angular/core';

import MajorIndexes from '../../model/major-indexes';
import MajorsIndexesService from '../../service/majors-indexes.service';

@Component({
  selector: 'app-majors-indexes',
  templateUrl: './majors-indexes.component.html',
  styleUrls: ['./majors-indexes.component.css'],
  providers: [MajorsIndexesService]
})
export class MajorsIndexesComponent implements OnInit {

	majorIndexes: any;

  	constructor(private majorIndexesService: MajorsIndexesService) {
    
  	}
  
  	ngOnInit() {
  		this.majorIndexes = this.getAll();
  	}
  	
  	getAll()
  	{
  		this.majorIndexesService.getAll().subscribe(data => {  			
    	this.majorIndexes = data.majorIndexesList;
    	});
  	}

}
