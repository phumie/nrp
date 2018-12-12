import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.css', '../../dashboard/dashboard.component.css']
})
export class ManageSuppliersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#submit').click(function(){
        alert("Supplier information updated.");
      });
    })
  }

}
