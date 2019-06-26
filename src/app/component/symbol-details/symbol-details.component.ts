import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import CompanyProfile from '../../model/company-profile';
import CompanyProfileService from '../../service/company-profile.service';

@Component({
  selector: 'app-symbol-details',
  templateUrl: './symbol-details.component.html',
  styleUrls: ['./symbol-details.component.css'],
  providers: [CompanyProfileService]
})

export class SymbolDetailsComponent implements OnInit {

	symbol: string;
 	companyProfile: CompanyProfile;

  	constructor(private route: ActivatedRoute, private companyProfileService: CompanyProfileService) 
  	{
  		this.route.params.subscribe((params) => 
  		{
  			this.symbol = params.id; 					
		}); 	
  	}

  	ngOnInit() 
  	{
    	this.getCompanyProfile(this.symbol);
  	}
  
  	getCompanyProfile(symbol)
  	{
  		this.companyProfileService.getOne(symbol).subscribe(data => {
      		this.companyProfile = data;
    	});
  	}
}