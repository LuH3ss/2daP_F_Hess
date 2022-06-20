import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersList: Users[] ;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.userService.getUsersList().subscribe((data) => {
      this.usersList = data;
    }
  )}

  getUsersDetails(id: number) {
    this.userService.getSingleUser(id).subscribe((data) => {
      console.log(data);
    }
  )}

  addUser() {
    let user={
      first_name: 'Lucas',
      last_name: 'Gonzalez',
      age: 23,
      id: 100,
    }
    this.userService.createUsers(user).subscribe((data) => {
     console.log(data)
      this.getUsers();
    }
    
    )}

    updateUser(user: Users){
      let userToUpdate=user;
      userToUpdate.first_name='Andres';
      userToUpdate.last_name='Gonzales';
      userToUpdate.age=90;
  
      this.userService.updateUsers(userToUpdate).subscribe(
        (data)=>{
          console.log(data);
          this.getUsers();
        }
      )
    }
  
}