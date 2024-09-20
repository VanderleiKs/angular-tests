import { Component, inject, input, Optional } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule],
  template: `
    <label>{{label()}}</label> 
    <input type="text" [(ngModel)]="value" 
      (focus)="onTouched && onTouched()"
      (input)="onChange && onChange(value)">
    `,
  styleUrl: './input-text.component.scss'
})
export class InputTextComponent implements ControlValueAccessor{
  label = input.required()
  value = ''

  private ngControl = inject(NgControl)

  constructor(){
    if(this.ngControl) this.ngControl.valueAccessor = this;
  }

  protected onTouched?: () => {};
  protected onChange?: (value: string) => {};
  protected disabled = false

  writeValue(obj: string): void {
    this.value = obj 
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
   this.disabled = isDisabled
  }

}
