import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      "ajax":{url:"https://financialmodelingprep.com/api/v3/company/stock/list",dataSrc:"symbolsList"},
      columns: [{
        title: 'Symbol',
        data: 'symbol'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'Price',
        data: 'price'
      }]
    };
  }

}
