import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-accounts',
  imports: [
    NgForOf,
    HttpClientModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {

  accounts : any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get(`http://localhost:8888/ACCOUNT-SERVICE/accounts`).subscribe({
      next: (data: any) => {
        this.accounts = data;
      },
      error: (error: any) => console.log(error)
    })
  }
}
