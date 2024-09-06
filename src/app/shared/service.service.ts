import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Service{
    openMenu = signal('valor inicial')
}