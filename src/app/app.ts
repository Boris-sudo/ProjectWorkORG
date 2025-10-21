import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './core/header';
import {Sidebar} from './core/sidebar';
import {Footer} from './core/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, Footer],
  styles: `
      .content {
          min-height:  100vh;
          padding-top: calc(var(--header-big-height) + 32px);

          @media screen and (max-width: 500px) {
              padding-top: calc(var(--header-big-height) + 16px);
          }
      }
  `,
  template: `
        <div>
            <HeaderComp/>
            <SidebarComp/>
            <div class="content">
                <router-outlet/>
            </div>
            <FooterComp/>
        </div>
    `
})
export class App {

}
