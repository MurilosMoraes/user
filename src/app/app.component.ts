import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/perfil', icon: 'person' },
    { title: 'Message', url: '/chat', icon: 'mail' },
    { title: 'Order', url: '/products', icon: 'cart' },
    { title: 'Favorite', url: '/folder/Inbox', icon: 'heart' },
    { title: 'Setting', url: '/folder/Inbox', icon: 'settings' },
    { title: 'Language', url: '/folder/Inbox', icon: 'language' },
    { title: 'Rate us', url: '/folder/Inbox', icon: 'thumbs-up' },
    { title: 'Contact us', url: '/folder/Inbox', icon: 'help-circle' },
    { title: 'Logout', url: '/login', icon: 'lock-open' },

  ];
  constructor() {}
}
