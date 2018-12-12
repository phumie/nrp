import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-rfqs',
  templateUrl: './rfqs.component.html',
  styleUrls: ['./rfqs.component.css', '../../dashboard/dashboard.component.css']
})
export class RfqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var quantity;
    var description;
    var rate;
    var total;

    $(document).ready(function(){
      $('#creatQuote').click(function(){
        alert("New quote created.");
      });

      $("#quantity").click(function(){
        quantity = prompt("Enter quantity","0");
      });

      $("#description").click(function(){
        description = prompt("Enter description","");
      });

      $("#price").click(function(){
        rate = prompt("Enter price","0");
      });

      $("#vat").click(function(){
        total = prompt("Enter VAT","0");
      });
    });
  }

}
