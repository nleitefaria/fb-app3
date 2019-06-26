import { AfterViewInit, Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements AfterViewInit, OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(private renderer: Renderer, private router: Router) { }

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
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) 
        { 
        	return '<button class="btn btn-primary" symbol-id="' + full.symbol + '">Details</button>';
        }
      }]
    };
  }
  
  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("symbol-id")) {    
        this.router.navigate(["/symbol/" + event.target.getAttribute("symbol-id")]);
      }
    });
  }

}
