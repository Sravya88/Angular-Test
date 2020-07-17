import { Component, OnInit } from '@angular/core';

import { ServerService } from 'src/app/server.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  CountryList: any;
  regions= [
    { 
      regionUrl: 'assets/images/honkkong.jpg',
      contenent:"Europe",
      value:"europe",
    },
    { 
      regionUrl: 'assets/images/newyork.png',
      contenent:"Asia",
      value:"asia",
    }]

 
    constructor(private serverService: ServerService, private router:Router) { }

  ngOnInit(): void {
    
  }
  FetchTeamList(regName){
    this.serverService.GetCountryList(regName).subscribe(
   (data:any )=>{ 
      this.CountryList=data;
   } );

  }
  FetchCountryList(regName){
    this.CountryList =  this.CountryList.filter(item => item.name==regName);


  }


}
