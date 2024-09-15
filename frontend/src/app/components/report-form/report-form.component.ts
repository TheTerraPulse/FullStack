import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'report-form',
  standalone: true,
  imports: [],
  templateUrl: './report-form.component.html',
  styleUrl: './report-form.component.scss'
})
export class ReportFormComponent implements OnInit{
  protected reportFormGroup!: FormGroup;

  ngOnInit() {
    this.reportFormGroup = new FormGroup({
      station: new FormControl<string | null>(null),
      pollutant: new FormControl<string | null>(null),

    })
  }
}
