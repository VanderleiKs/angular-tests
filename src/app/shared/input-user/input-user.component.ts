import { Component, NgModule } from '@angular/core';
import { Service } from '../service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, DecimalPipe, I18nPluralPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-user',
  standalone: true,
  imports: [FormsModule, JsonPipe, I18nPluralPipe, TitleCasePipe, DecimalPipe, CommonModule, NgbModule],
  templateUrl: './input-user.component.html',
  styleUrl: './input-user.component.scss'
})
export class InputUserComponent {

  count: { [k: string]: string} = {
    '=0': 'ano',
    '=1': 'ano',
    'other': 'anos'
  }

  price = 585.52
  percent = 58.50
  newvalue: form = {age: 0, value:'', date:''}
  constructor(public service: Service){

  }


  alteraValue(){
    this.service.openMenu.update(() => this.newvalue.value)
  }

}

interface form {
  age: number
  value: string
  date: string
}