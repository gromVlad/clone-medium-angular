import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './core/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clone-medium-angular';
}
