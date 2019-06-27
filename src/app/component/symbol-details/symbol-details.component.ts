import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import CompanyProfile from '../../model/company-profile';
import IncomeStatement from '../../model/income-statement';

import CompanyProfileService from '../../service/company-profile.service';
import IncomeService from '../../service/income.service';

@Component({
  selector: 'app-symbol-details',
  templateUrl: './symbol-details.component.html',
  styleUrls: ['./symbol-details.component.css'],
  providers: [CompanyProfileService]
})

export class SymbolDetailsComponent implements OnInit {

	symbol: string;
 	companyProfile: CompanyProfile;
 	incomeStatement: IncomeStatement;

  	constructor(private route: ActivatedRoute, private companyProfileService: CompanyProfileService, private incomeService: IncomeService) 
  	{
  		this.route.params.subscribe((params) => 
  		{
  			this.symbol = params.id; 					
		}); 	
  	}

  	ngOnInit() 
  	{
    	this.getCompanyProfile(this.symbol);
    	this.getIncome(this.symbol);
  	}
  
  	getCompanyProfile(symbol)
  	{
  		this.companyProfileService.getOne(symbol).subscribe(data => {
      		this.companyProfile = data;
    	});
  	}
  	
  	getIncome(symbol)
  	{
  		this.incomeService.getOne(symbol).subscribe(data => {
      		
      		this.incomeStatement = data;
      		var i;
      		for (i = 0; i < this.incomeStatement.financials.length; i++) {
      			this.incomeStatement.financials[i].revenue = data.financials[i]["Revenue"]; 
      			this.incomeStatement.financials[i].revenueGrowth = data.financials[i]["Revenue Growth"];
      			this.incomeStatement.financials[i].costOfRevenue = data.financials[i]["Cost of Revenue"]; 
      			
      			this.incomeStatement.financials[i].grossProfit = data.financials[i]["Gross Profit"]; 
      			this.incomeStatement.financials[i].rdExpenses = data.financials[i]["R&D Expenses"]; 
      			this.incomeStatement.financials[i].sgaExpense = data.financials[i]["SG&A Expense"];  
  				//TODO: Finish	
			}
      		
      		     		 
    	});
  	}
}