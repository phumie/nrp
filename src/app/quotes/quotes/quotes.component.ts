import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css',  '../../dashboard/dashboard.component.css']
})
export class QuotesComponent implements OnInit {

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

      $("#rate").click(function(){
        rate = prompt("Enter rate","0");
      });

      $("#total").click(function(){
        total = prompt("Enter total","0");
      });
    });
  }

}
