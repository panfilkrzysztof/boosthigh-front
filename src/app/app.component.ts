import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicles = [
    {
      id: 1,
      v_type: "bus",
      v_name: "Autobus 307"
    },
    {
      id: 2,
      v_type: "bus",
      v_name: "Autobus 308"
    },
    {
      id: 3,
      v_type: "tram",
      v_name: "Tramwaj 336"
    },
    {
      id: 4,
      v_type: "tram",
      v_name: "Tramwaj 337"
    },
    {
      id: 5,
      v_type: "train",
      v_name: "Pociąg 14"
    },
  ];
  devices = [
    {
      id: 1,
      vehicle_id: 1,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 1"
    },
    {
      id: 2,
      vehicle_id: 1,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 2"
    },
    {
      id: 3,
      vehicle_id: 2,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 1"
    },
    {
      id: 4,
      vehicle_id: 2,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 2"
    },
    {
      id: 5,
      vehicle_id: 3,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 1"
    },
    {
      id: 6,
      vehicle_id: 3,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 2"
    },
    {
      id: 7,
      vehicle_id: 4,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 1"
    },
    {
      id: 8,
      vehicle_id: 5,
      d_type: "ticket_machine",
      d_name: "Biletomat nr 2"
    }
  ];
  components = [
    {
      id: 1,
      device_id: 1,
      c_type: "payment_terminal",
      c_name: "Trminal płatniczy"
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
      c_name: "Drukarka termiczna"
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
      id: 24,
      device_id: 8,
      c_type: "printer",
      c_name: "Drukarka termiczna"
    },
  ];
  status = [
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
  ]
}
