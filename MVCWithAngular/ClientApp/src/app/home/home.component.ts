import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <h2>Angular Home Component</h2>
      <p>This component is loaded dynamically when navigating to the home route.</p>
      <div class="feature-list">
        <h3>Features:</h3>
        <ul>
          <li>Standalone components</li>
          <li>Lazy loading</li>
          <li>Modern Angular 17+</li>
          <li>Integrated with MVC</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .feature-list {
      margin-top: 20px;
      text-align: left;
    }
    .feature-list ul {
      padding-left: 20px;
    }
    .feature-list li {
      margin: 8px 0;
    }
  `]
})
export class HomeComponent {
}
