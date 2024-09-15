import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from "primeng/table";
import { EmissionData } from "../../types/EmissionData";

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [
    TableModule
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit{
  @Input()
  public emissionData!: EmissionData[];

  @Input()
  public tableTitle!: string;

  public currentData!: EmissionData[];

  ngOnInit() {
    this.currentData = [];
  }

  public loadData() {
    this.currentData.splice(0, this.currentData.length)
    this.emissionData.map(emissionInformation => {
      this.currentData.push(emissionInformation);
    })
  }
}
