import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import CompanyProfile from '../../model/company-profile';
import IncomeStatement from '../../model/income-statement';
import BalanceSheets from '../../model/balance-sheets';

import CompanyProfileService from '../../service/company-profile.service';
import IncomeService from '../../service/income.service';
import BalanceSheetService from '../../service/balance-sheet.service';


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
 	balanceSheets: BalanceSheets;

  	constructor(private route: ActivatedRoute, private companyProfileService: CompanyProfileService, private incomeService: IncomeService, private balanceSheetService: BalanceSheetService) 
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
    	this.getBalanceSheet(this.symbol);
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
      			this.incomeStatement.financials[i].operatingExpenses = data.financials[i]["Operating Expenses"];  
      			this.incomeStatement.financials[i].operatingIncome = data.financials[i]["Operating Income"];  
      			this.incomeStatement.financials[i].interestExpense = data.financials[i]["Interest Expense"];      			
      			this.incomeStatement.financials[i].earningsBeforeTax = data.financials[i]["Interest Expense"];
      			this.incomeStatement.financials[i].incomeTaxExpense = data.financials[i]["Income Tax Expense"];      			
      			this.incomeStatement.financials[i].netIncomeNonControllingInt = data.financials[i]["Net Income - Non-Controlling int"];
                this.incomeStatement.financials[i].netIncomeDiscontinued = data.financials[i]["Net Income - Discontinued ops"];
                this.incomeStatement.financials[i].netIncome = data.financials[i]["Net Income"];     			     			 
      			this.incomeStatement.financials[i].preferredDividends = data.financials[i]["Preferred Dividends"];
            	this.incomeStatement.financials[i].netIncomeCom = data.financials[i]["Net Income Com"];
            	this.incomeStatement.financials[i].ePS = data.financials[i]["EPS"];
            	this.incomeStatement.financials[i].ePSDiluted = data.financials[i]["EPS Diluted"];	
  				this.incomeStatement.financials[i].weightedAverageShsOut = data.financials[i]["Weighted Average Shs Out"];
            	this.incomeStatement.financials[i].weightedAverageShsOutDil = data.financials[i]["Weighted Average Shs Out (Dil)"];
            	this.incomeStatement.financials[i].dividendPerShare = data.financials[i]["Dividend per Share"];
            	this.incomeStatement.financials[i].grossMargin = data.financials[i]["Gross Margin"];
            	this.incomeStatement.financials[i].eBITDAMargin = data.financials[i]["EBITDA Margin"];
            	this.incomeStatement.financials[i].eBITMargin = data.financials[i]["EBIT Margin"];
            	this.incomeStatement.financials[i].profitMargin = data.financials[i]["Profit Margin"];
            	this.incomeStatement.financials[i].freeCashFlowMargin = data.financials[i]["Free Cash Flow margin"];
            	this.incomeStatement.financials[i].eBITDA = data.financials[i]["EBITDA"];
            	this.incomeStatement.financials[i].eBIT = data.financials[i]["EBIT"];
           	 	this.incomeStatement.financials[i].consolidatedIncome = data.financials[i]["Consolidated Income"];
            	this.incomeStatement.financials[i].earningsBeforeTaxMargin = data.financials[i]["Earnings Before Tax Margin"];
            	this.incomeStatement.financials[i].netProfitMargin = data.financials[i]["Net Profit Margin"];		
			}
      				     		 
    	});
  	}
  	
  	getBalanceSheet(symbol)
  	{ 		
  		this.balanceSheetService.getOne(symbol).subscribe(data => {
  					 			
  			//TODO
  			//alert(data.financials.length);
  			//this.balanceSheets = data;  			
  			//alert(this.balanceSheets.financials.length);
  				 			  			     								
  			 			
  		});
  		
  		
  	}
  		
  		
  	
  	
  	
  	
  	
}