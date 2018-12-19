import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // closeMenu() {
  //   matMenuTriggerAbout.closeMenu()
  // }
}
