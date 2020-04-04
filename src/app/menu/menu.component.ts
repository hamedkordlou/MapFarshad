import { MapService } from './../map.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  name = new FormControl('');
  public selectedValue;
  optionsData = [
    {id: 1, name: 'option1'},
    {id: 2, name: 'option2'},
    {id: 3, name: 'option3'},
    {id: 4, name: 'option4'}
  ];
  CCSs;
  selectedCCS;

  constructor(
    private mapService: MapService,
    ) { }

  ngOnInit(): void {
    this.CCSs = this.mapService.getConcreteConstructionSite();
  }

}

