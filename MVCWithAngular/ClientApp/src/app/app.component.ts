import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-brand">
          <h2>MVCWithAngular</h2>
        </div>
        <ul class="nav-menu">
          <li><a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">🏠 Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">ℹ️ About</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">📧 Contact</a></li>
          <li><a routerLink="/dashboard" routerLinkActive="active">📊 Dashboard</a></li>
          <li><a routerLink="/profile" routerLinkActive="active">👤 Profile</a></li>
        </ul>
      </nav>
      
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #f8f9fa;
    }
    
    .navbar {
      background: white;
      padding: 15px 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .nav-brand h2 {
      margin: 0;
      color: #007acc;
      font-size: 24px;
    }
    
    .nav-menu {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .nav-menu li {
      margin: 0;
    }
    
    .nav-menu a {
      text-decoration: none;
      color: #333;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .nav-menu a:hover {
      background: #f8f9fa;
      color: #007acc;
    }
    
    .nav-menu a.active {
      background: #007acc;
      color: white;
    }
    
    .main-content {
      padding: 20px;
    }
    
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 15px;
      }
      
      .nav-menu {
        justify-content: center;
      }
    }
  `]
})
export class AppComponent {
  title = 'mvc-with-angular-client';
}
