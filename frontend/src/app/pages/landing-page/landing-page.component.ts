import { CommonModule } from '@angular/common';
import {Component, inject, OnInit, ViewChild} from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import {MapComponent} from "../../components/map/map.component";
import {Button, ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {DataTableComponent} from "../../components/data-table/data-table.component";
import {EmissionData} from "../../types/EmissionData";
import {Router} from "@angular/router";

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule, MapComponent, Button, FileUploadModule, ToastModule, DataTableComponent],
  providers: [MessageService],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public items: any | undefined;

  public firmReport!: EmissionData[];
  public officialReport!: EmissionData[];

  private isReadyToAnalyze: boolean = false;

  @ViewChild('official') officialTableComponent!: DataTableComponent;
  @ViewChild('firm') firmTableComponent!: DataTableComponent;
  @ViewChild('map') mapComponent!: MapComponent;

  public isButtonLoading: boolean = false;

  constructor(private messageService: MessageService, private router: Router) { }

  protected load() {
    this.isButtonLoading = true;

    if(this.isReadyToAnalyze) {
      setTimeout(() => {
        this.isButtonLoading = false;
        this.router.navigate(['result']).then(r => console.log(r));
      }, 2000);

      return ;
    }

    this.isButtonLoading = false;

    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please upload a valid report and select a designated area on the map',
      life: 5000
    });
  }

  uploadReport(event: any) {
    this.displayReportData(this.firmTableComponent);
    this.isReadyToAnalyze = this.officialTableComponent.currentData.length > 0;

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Report uploaded successfully',
    });
  }

  private displayReportData(tableComponent: DataTableComponent) {
    tableComponent.loadData();
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        route: ''
      },
      {
        label: 'About us',
        icon: 'pi pi-info-circle',
        route: 'about'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        route: 'contact'
      }
    ];

    this.officialReport = [
      {
        station: "VL2",
        pollutant: "CO",
        dailyMaximum: 1.65,
        annualAverage: 0.47,
        measurementUnit: "mg/m^3",
        limitValue: "10mg/m^3(/8h)"
      },
      {
        station: "VL2",
        pollutant: "SO2",
        dailyMaximum: 25.53,
        annualAverage: 8.77,
        measurementUnit: "µg/m3",
        limitValue: "125µg/m3(/24h)"
      },
      {
        station: "VL2",
        pollutant: "O3",
        dailyMaximum: 67.38,
        annualAverage: 31.74,
        measurementUnit: "µg/m3",
        limitValue: "120µg/m3(/8h)"
      }
    ];

    this.firmReport = [
      {
        station: "VL2",
        pollutant: "CO",
        dailyMaximum: 1.65,
        annualAverage: 0.47,
        measurementUnit: "mg/m^3",
        limitValue: "10mg/m^3(/8h)"
      },
      {
        station: "VL2",
        pollutant: "SO2",
        dailyMaximum: 30.09,
        annualAverage: 8.77,
        measurementUnit: "µg/m3",
        limitValue: "125µg/m3(/24h)"
      },
      {
        station: "VL2",
        pollutant: "O3",
        dailyMaximum: 67.38,
        annualAverage: 31.74,
        measurementUnit: "µg/m3",
        limitValue: "120µg/m3(/8h)"
      }
    ];
  }

  protected handleEvent(event: boolean) {
    this.isReadyToAnalyze = event && this.firmTableComponent.currentData.length > 0;
    this.officialTableComponent.loadData();
  }
}
