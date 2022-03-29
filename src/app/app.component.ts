import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';


export interface VehiclesInterface {
  id: number,
  type: string,
  name: string,
};
export interface DevicesInterface {
  id: number,
  vehicle_id: number,
  type: string,
  name: string,
};
export interface ComponentsInterface {
  id: number,
  device_id: number,
  type: string,
  name: string,
};
export interface StatusInterface {
  id: number,
  component_id: number,
  type: string,
  description: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class AppComponent {

  constructor(private http: HttpClient) {
    // get data from the database
    this.getData();
  }

  public getJSON(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url, { observe: 'response' })
        .subscribe(
          res => {
            if (!res.ok) {
              reject("Failed with status: " + res.status + "\nTrying to load " + url);
            }

            var jsonRes = {};
            if (res.body != "" && res.body != null)
              jsonRes = res.body;
            resolve(jsonRes);
          },
          error => {
          }
        );
    }).catch((reason) => false);
  }

  // 1-st level - Vehicles //
  vehicles = new MatTableDataSource();
  vehiclesDisplayedColumns: string[] = ['id', 'name', 'type', 'status'];
  expandedElementVehicle: any | null;
  vehicleTypes = [
    { value: "bus", name: "Bus" },
    { value: "tram", name: "Tram" },
    { value: "train", name: "Train" }
  ];

  // 2-nd level- devices //
  devices = new MatTableDataSource();
  devicesList: DevicesInterface[] | undefined; //temp
  devicesDisplayedColumns: string[] = ['id', 'vehicle_id', 'type', 'name', 'status'];
  expandedElementDevice: any | null;

  // 3-rd level - components //
  components = new MatTableDataSource();
  componentsDisplayedColumns: string[] = ['id', 'device_id', 'type', 'name', 'status'];
  expandedElementComponent: any | null;

  // 4-th level - status //
  status = new MatTableDataSource();
  statusDisplayedColumns: string[] = ['id', 'component_id', 'type', 'description', 'status'];

  ngOnInit() {

  }

  getData() {
    //retrieve data from the database //
    this.getJSON("http://localhost/vehicles").then(data => {
      this.vehicles.data = Array.isArray(data) ? data : [];
    });
    this.getJSON("http://localhost/devices").then(data => {
      this.devices.data = Array.isArray(data) ? data : [];
    });
    this.getJSON("http://localhost/components").then(data => {
      this.components.data = Array.isArray(data) ? data : [];
    });
    this.getJSON("http://localhost/status").then(data => {
      this.status.data = Array.isArray(data) ? data : [];
      this.prepareStatus(data);
    });

  }
  prepareStatus(data: any) {

  }

  // Filter Vehicles by type 
  applyFilter(data: any) {
    this.expandedElementVehicle = null;
    this.expandedElementDevice = null;
    this.expandedElementComponent = null;
    this.vehicles.filter = data.value;
  }
  // Filter children by parent_id
  applySubFilter(level: string, data: number) {
    switch (level) {
      case 'vehicle':
        this.devices.data = [];
        this.getJSON("http://localhost/devices/vehicle_" + data).then(data => {
          this.devices.data = Array.isArray(data) ? data : [];
        });
        break;
      case 'device':
        this.components.data = [];
        this.getJSON("http://localhost/components/device_" + data).then(data => {
          this.components.data = Array.isArray(data) ? data : [];
        });
        break;
      case 'component':
        this.status.data = [];
        this.getJSON("http://localhost/status/component_" + data).then(data => {
          this.status.data = Array.isArray(data) ? data : [];
        });
        break;
    }
  }
}
