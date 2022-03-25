import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { animate, state, style, transition, trigger } from '@angular/animations';


export interface VehiclesInterface {
  id: number,
  v_type: string,
  v_name: string,
};
export interface DevicesInterface {
  id: number,
  vehicle_id: number,
  d_type: string,
  d_name: string,
};
export interface ComponentsInterface {
  id: number,
  device_id: number,
  c_type: string,
  c_name: string,
};
export interface StatusInterface {
  id: number,
  component_id: number,
  s_type: string,
  s_description: string
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
  filterValues = {};
  devices = new MatTableDataSource();
  devicesList: DevicesInterface[] | undefined;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'type', 'status'];
  devicesDisplayedColumns: string[] = ['id', 'vehicle_id', 'type', 'name', 'status'];
  expandedElement: any | null;
  expandedElementDevice: any | null;
  vehicleTypes = [
    { value: "bus", name: "Bus" },
    { value: "tram", name: "Tram" },
    { value: "train", name: "Train" }
  ];


  ngOnInit() {
    this.getData();


  }

  getData() {
    const vehicles: VehiclesInterface[] = [
      {
        id: 1,
        v_type: "bus",
        v_name: "Autobus 307",
      },
      {
        id: 2,
        v_type: "bus",
        v_name: "Autobus 308",
      },
      {
        id: 3,
        v_type: "tram",
        v_name: "Tramwaj 336",
      },
      {
        id: 4,
        v_type: "tram",
        v_name: "Tramwaj 337",
      },
      {
        id: 5,
        v_type: "train",
        v_name: "Pociąg 14",
      },
    ];
    const devices: DevicesInterface[] = [
      {
        id: 1,
        vehicle_id: 1,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 1",
      },
      {
        id: 2,
        vehicle_id: 1,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 2",
      },
      {
        id: 3,
        vehicle_id: 2,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 1",
      },
      {
        id: 4,
        vehicle_id: 2,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 2",
      },
      {
        id: 5,
        vehicle_id: 3,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 1",
      },
      {
        id: 6,
        vehicle_id: 3,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 2",
      },
      {
        id: 7,
        vehicle_id: 4,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 1",
      },
      {
        id: 8,
        vehicle_id: 5,
        d_type: "ticket_machine",
        d_name: "Biletomat nr 2",
      }
    ];

    const components: ComponentsInterface[] = [
      {
        id: 1,
        device_id: 1,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy",
      },
      {
        id: 2,
        device_id: 1,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 3,
        device_id: 1,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 4,
        device_id: 2,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 5,
        device_id: 2,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 6,
        device_id: 2,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 7,
        device_id: 3,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 8,
        device_id: 3,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 9,
        device_id: 3,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 10,
        device_id: 4,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 11,
        device_id: 4,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 12,
        device_id: 4,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 13,
        device_id: 5,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 14,
        device_id: 5,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 15,
        device_id: 5,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 16,
        device_id: 6,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 17,
        device_id: 6,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 18,
        device_id: 6,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      },
      {
        id: 19,
        device_id: 7,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 20,
        device_id: 7,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 21,
        device_id: 7,
        c_type: "printer",
        c_name: "Drukarka termiczna",
      },
      {
        id: 22,
        device_id: 8,
        c_type: "payment_terminal",
        c_name: "Trminal płatniczy"
      },
      {
        id: 23,
        device_id: 8,
        c_type: "qr_code_reader",
        c_name: "Czytnik kodów QR"
      },
      {
        id: 34,
        device_id: 8,
        c_type: "printer",
        c_name: "Drukarka termiczna"
      }
    ];

    const status: StatusInterface[] = [
      {
        id: 1,
        component_id: 1,
        s_type: "error",
        s_description: "Brak zasilania"
      },
      {
        id: 2,
        component_id: 21,
        s_type: "warning",
        s_description: "Zacięcie papieru"
      }
    ];
    this.dataSource.data = vehicles;
    this.devices.data = devices;
    this.devicesList = devices;
  }

  applyFilter(data: any) {
    this.dataSource.filter = data.value;
  }
  applyDeviceFilter(data: number) {
    this.devices.filter = data.toString();
  }
}
