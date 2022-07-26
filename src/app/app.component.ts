import { Component , OnInit} from '@angular/core';
import{RestService} from './rest.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UsersList: any = [];

  ngOnInit() {
    this.loadUsers();
  }
  title = 'capi_examen_front_ronaldo_rodriguez';
  constructor(
    public restService: RestService
  ){ }
  loadUsers() {
    return this.restService.getUsers().subscribe((data: {}) => {
      this.UsersList = data;
    })
  }
}
