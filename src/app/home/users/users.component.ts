import { Component,OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      this.users = data;
    });
  }
}
