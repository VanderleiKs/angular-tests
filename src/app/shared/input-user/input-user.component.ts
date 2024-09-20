import { Component, NgModule } from '@angular/core';
import { Service } from '../service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, DecimalPipe, I18nPluralPipe, JsonPipe, TitleCasePipe } from '@angular/common';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  
  dataInserida = ''
  minDate: NgbDateStruct = {year: 2024, month: 9, day: 20}
  maxDate: NgbDateStruct = {year: 2024, month: 9, day: 20}
  
  constructor(public service: Service){

  }

  validateDate(){
    if(this.dataInserida && this.dataInserida.length == 10){
      console.log('data: ', this.dataInserida)
      const date = this.dataInserida.split('/')
      const dateInserted = new Date(Number.parseInt(date[2]), Number.parseInt(date[1]), Number.parseInt(date[0]))
      const min = new Date(this.minDate.year, this.minDate.month, this.minDate.day)
      const max = new Date(this.maxDate.year, this.maxDate.month, this.maxDate.day)

      console.log('data Inserida: ', dateInserted)
      if(dateInserted.getTime() < min.getTime() || dateInserted.getTime() > max.getTime()){
        this.dataInserida = ''
        alert("Data fora do periodo permitido")
      }
    }
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