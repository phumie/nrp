import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css', '../../dashboard/dashboard.component.css']
})
export class ManageEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#submit').click(function(){
        alert("Employee information updated.");
      });

      $('#deleteEmployee').click(function(){
        alert("Employee deleted.");
      });
    })
  }

}
