import { Component, ElementRef, ViewChild } from '@angular/core';
import { HelloComponent } from './hello.component';
import { User, users } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  isChecked = true;
  SomeFunc: () => number = () => {
    return 123;
  };
  @ViewChild('toogleComp', { static: true }) toggleComp: HelloComponent;
  handleChaneChecked(checked: boolean) {
    this.isChecked = checked;
  }
  @ViewChild('toogleChange', { static: true })
  toggleBtn: ElementRef<HTMLButtonElement>;
  ngOnInit() {
    console.log('onInit', this.toggleComp);
    console.log('btn', this.toggleBtn);
  }
  ngAfterViewInit() {
    console.log(this.toggleComp);
  }
}
