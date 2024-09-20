import { Component, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FocusNextDirective } from './next.directive';
import { BgColorDirective } from './bgColor.directive';
import { InputUserComponent } from "./shared/input-user/input-user.component";
import { Service } from './shared/service.service';
import { InputTextComponent } from "./shared/ui/input-text/input-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, BgColorDirective, FocusNextDirective, InputUserComponent, RouterLink, InputTextComponent],
  providers: [BgColorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tests';

  isOpen  = false

  form: FormGroup;

  constructor(private fb: FormBuilder, private service: Service){
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [0, Validators.min(1)],
      textValue: ['', Validators.required]
    })

    effect(() => console.log("valor de :" , service.openMenu()))
  }

  onSubmit(){
    this.form.markAllAsTouched()

    if(this.form.invalid){
      alert("Form invalido")
    }
    console.log(this.form)
  }

  nextInput(){
    this.form
  }

  print(){
    console.log("Pressionou enter")
  }
  
}
