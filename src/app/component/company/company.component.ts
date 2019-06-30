import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

import Symbols from '../../model/symbols';
import Symbol from '../../model/symbol';

import CompanyProfile from '../../model/company-profile';

import CompanyProfileService from '../../service/company-profile.service';
import SymbolsService from '../../service/symbols.service';

import { of } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [SymbolsService, CompanyProfileService]
})


export class CompanyComponent implements OnInit {

  form: FormGroup; 
  symbols: any;
  companyProfile: CompanyProfile;

  constructor(private formBuilder: FormBuilder,  private symbolsService: SymbolsService, private companyProfileService: CompanyProfileService) {
    this.form = this.formBuilder.group({      
      sym: ['']
    });
  }
  
  ngOnInit() {
  	this.symbols = this.getAllSymbols();
  }

  getAllSymbols()
  {
  	this.symbolsService.getAll().subscribe(data => {  			
    	this.symbols = data.symbolsList;
    });
  }
  
  getCompanyProfile(symbol)
  {
  	this.companyProfileService.getOne(symbol).subscribe(data => {
      	this.companyProfile = data;
    });
  }

  submit() {
  	this.getCompanyProfile(this.form.controls["sym"].value);
  
  }
}