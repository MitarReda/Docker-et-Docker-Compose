import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers : any;
  constructor(private http: HttpClient) {
  }
    ngOnInit(): void {
      this.http.get(`http://localhost:8888/CUSTOMER-SERVICE/customers`).subscribe({
        next: (data: any) => {
          this.customers = data;
        },
        error: (error: any) => console.log(error)
      })
    }

}
