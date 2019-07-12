import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import CompanyProfile from '../../model/company-profile';
import IncomeStatement from '../../model/income-statement';
import BalanceSheets from '../../model/balance-sheets';
import CashFlows from '../../model/cash-flows';
import FinancialRatios from '../../model/financial-ratios';

import CompanyProfileService from '../../service/company-profile.service';
import IncomeService from '../../service/income.service';
import BalanceSheetService from '../../service/balance-sheet.service';
import CashFlowService from '../../service/cash-flow.service';
import FinancialRatiosService from '../../service/financial-ratios.service';

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
 	cashFlows: CashFlows;
 	financialRatios: FinancialRatios;

  	constructor(private route: ActivatedRoute, private companyProfileService: CompanyProfileService, private incomeService: IncomeService, private balanceSheetService: BalanceSheetService, private cashFlowService: CashFlowService, private financialRatiosService : FinancialRatiosService) 
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
    	this.getCashFlow(this.symbol);
    	this.getRatios(this.symbol);
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
  			this.balanceSheets = data;
      		var i;
      		for (i = 0; i < this.balanceSheets.financials.length; i++) {
      			this.balanceSheets.financials[i].cashAndCashEquivalents = data.financials[i]["Cash and cash equivalents"];       			
      			this.balanceSheets.financials[i].shortTermInvestments = data.financials[i]["Short-term investments"]; 
      			this.balanceSheets.financials[i].cashAndShortTermInvestments = data.financials[i]["Cash and short-term investments"]; 
      			this.balanceSheets.financials[i].receivables = data.financials[i]["Receivables"];       			     			
      			this.balanceSheets.financials[i].inventories = data.financials[i]["Inventories"]; 
      			this.balanceSheets.financials[i].totalCurrentAssets = data.financials[i]["Total current assets"]; 
      			this.balanceSheets.financials[i].propertyPlantEquipmentNet = data.financials[i]["Property, Plant & Equipment Net"];      			
      			this.balanceSheets.financials[i].goodWillAndIntangibleAssets = data.financials[i]["Goodwill and Intangible Assets"];
      			this.balanceSheets.financials[i].longTermInvestments = data.financials[i]["Long-term investments"];
      			this.balanceSheets.financials[i].taxAssets = data.financials[i]["Tax assets"];     			
      			this.balanceSheets.financials[i].totalNonCurrentAssets = data.financials[i]["Total non-current assets"];
      			this.balanceSheets.financials[i].totalAssets = data.financials[i]["Total assets"];
      			this.balanceSheets.financials[i].payables = data.financials[i]["Payables"];     			
      			this.balanceSheets.financials[i].shortTermDebt = data.financials[i]["Short-term debt"];
      			this.balanceSheets.financials[i].totalCurrentLiabilities = data.financials[i]["Total current liabilities"];
      			this.balanceSheets.financials[i].longTermDebt = data.financials[i]["Long-term debt"];     			
      			this.balanceSheets.financials[i].totalDebt = data.financials[i]["Total debt"];
      			this.balanceSheets.financials[i].deferredRevenue = data.financials[i]["Deferred revenue"];
      			this.balanceSheets.financials[i].taxLiabilities = data.financials[i]["Tax Liabilities"];      			
      			this.balanceSheets.financials[i].depositLiabilities = data.financials[i]["Deposit Liabilities"];
      			this.balanceSheets.financials[i].totalNonCurrentLiabilities = data.financials[i]["Total non-current liabilities"];
      			this.balanceSheets.financials[i].totalLiabilities = data.financials[i]["Total liabilities"];     			
      			this.balanceSheets.financials[i].otherComprehensiveIncome = data.financials[i]["Other comprehensive income"];
      			this.balanceSheets.financials[i].retainedEarnings = data.financials[i]["Retained earnings (deficit)"];
      			this.balanceSheets.financials[i].totalShareholdersEquity = data.financials[i]["Total shareholders equity"];     			
      			this.balanceSheets.financials[i].investments = data.financials[i]["Investments"];
      			this.balanceSheets.financials[i].netDebt = data.financials[i]["Net Debt"];
      			this.balanceSheets.financials[i].otherAssets = data.financials[i]["Other Assets"];
      			this.balanceSheets.financials[i].otherLiabilities = data.financials[i]["Other Liabilities"];     			
      		}  				 			  			     											 			
  		}); 		
  	}
  	
  	getCashFlow(symbol)
  	{ 
  		this.cashFlowService.getOne(symbol).subscribe(data => {			
  			this.cashFlows = data;
  			var i;
      		for (i = 0; i < this.cashFlows.financials.length; i++) 
      		{   		
      			this.cashFlows.financials[i].depreciationAmortization = data.financials[i]["Depreciation & Amortization"]; 
      			this.cashFlows.financials[i].stockBasedCompensation = data.financials[i]["Stock-based compensation"]; 
      			this.cashFlows.financials[i].operatingCashFlow = data.financials[i]["Operating Cash Flow"]; 
      			this.cashFlows.financials[i].capitalExpenditure = data.financials[i]["Capital Expenditure"]; 
      			this.cashFlows.financials[i].acquisitionsAndDisposals = data.financials[i]["Acquisitions and disposals"]; 
      			this.cashFlows.financials[i].investmentPurchasesAndSales = data.financials[i]["Investment purchases and sales"]; 
      			this.cashFlows.financials[i].investingCashFlow = data.financials[i]["Investing Cash flow"];     		
      			this.cashFlows.financials[i].issuanceOfDebt = data.financials[i]["Issuance (repayment) of debt"]; 
      			this.cashFlows.financials[i].issuanceOfShares = data.financials[i]["Issuance (buybacks) of shares"]; 
      			this.cashFlows.financials[i].dividendPayments = data.financials[i]["Dividend payments"];     			
      			this.cashFlows.financials[i].financingCashFlow = data.financials[i]["Financing Cash Flow"]; 
      			this.cashFlows.financials[i].effectOfForexChangesOnCash = data.financials[i]["Effect of forex changes on cash"]; 
      			this.cashFlows.financials[i].netCashFlowChangeInCash = data.financials[i]["Net cash flow / Change in cash"];    			
      			this.cashFlows.financials[i].freeCashFlow = data.financials[i]["Free Cash Flow"]; 
      			this.cashFlows.financials[i].netCashMarketCap = data.financials[i]["Net Cash/Marketcap"];     		
      		}  			
  		}); 		 	
  	}
  	
  	
  	getRatios(symbol)
  	{
  		this.financialRatiosService.getOne(symbol).subscribe(data => {			
  			this.financialRatios = data;
  			
  			
  			alert(this.financialRatios.ratio[0].liquidityMeasurementRatios.currentRatio);
  			
  			
  		}); 	
  	
  	
  	
  	}
  	
  	
  	
  	
  	
  	
  	
  	
}