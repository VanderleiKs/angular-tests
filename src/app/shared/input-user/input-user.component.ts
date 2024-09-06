import { Component, NgModule } from '@angular/core';
import { Service } from '../service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-input-user',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './input-user.component.html',
  styleUrl: './input-user.component.scss'
})
export class InputUserComponent {

  newvalue: form = {value:'', date:''}
  constructor(public service: Service){

  }


  alteraValue(){
    this.service.openMenu.update(() => this.newvalue.value)
  }

}

interface form {
  value: string
  date: string
}