import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusNext]',
  standalone: true
})
export class FocusNextDirective {
  @HostListener('keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    this.moveFocus(event, 'next');
  }

  @HostListener('keydown.arrowdown', ['$event'])
  onArrowDown(event: KeyboardEvent){
    console.log("pressionado arrow down");
    this.moveFocus(event, 'next');
  }

  @HostListener('keydown.arrowup', ['$event'])
  onArrowUp(event: KeyboardEvent) {
    this.moveFocus(event, 'previous');
  }

  private moveFocus(event: KeyboardEvent, direction: 'next' | 'previous') {
    const form = event.target as HTMLElement;
    const formElements = Array.from(form.closest('form')?.querySelectorAll('input, select, textarea, button') || []) as HTMLElement[];

    const index = formElements.indexOf(form);
    let nextIndex = direction === 'next' ? index + 1 : index - 1;

    if (nextIndex >= 0 && nextIndex < formElements.length) {
      const nextElement = formElements[nextIndex];
      if (nextElement) {
        nextElement.focus();
        event.preventDefault(); // Evita a ação padrão (como submissão do formulário)
      }
    }
  }
}