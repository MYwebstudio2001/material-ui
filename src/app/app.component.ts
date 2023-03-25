import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ui-angular';

  links = [{ route: '', name: 'Table' }];
  activeLink = this.links[0].route;
}
