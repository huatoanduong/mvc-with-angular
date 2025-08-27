import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p class="error-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p class="error-description">
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div class="actions">
          <button class="btn-primary" (click)="goHome()">
            🏠 Go Home
          </button>
          <button class="btn-secondary" (click)="goBack()">
            ← Go Back
          </button>
        </div>
        
        <div class="helpful-links">
          <h3>You might be looking for:</h3>
          <ul>
            <li><a routerLink="/home">Home</a></li>
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="/contact">Contact</a></li>
            <li><a routerLink="/dashboard">Dashboard</a></li>
            <li><a routerLink="/profile">Profile</a></li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 80vh;
      padding: 20px;
    }
    
    .not-found-content {
      text-align: center;
      max-width: 600px;
    }
    
    .error-code {
      font-size: 120px;
      font-weight: bold;
      color: #007acc;
      line-height: 1;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    h1 {
      font-size: 36px;
      color: #333;
      margin-bottom: 20px;
    }
    
    .error-message {
      font-size: 20px;
      color: #666;
      margin-bottom: 15px;
    }
    
    .error-description {
      font-size: 16px;
      color: #888;
      margin-bottom: 30px;
      line-height: 1.5;
    }
    
    .actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }
    
    .btn-primary, .btn-secondary {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }
    
    .btn-primary {
      background: #007acc;
      color: white;
    }
    
    .btn-primary:hover {
      background: #005a9e;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .btn-secondary {
      background: #f8f9fa;
      color: #333;
      border: 1px solid #ddd;
    }
    
    .btn-secondary:hover {
      background: #e9ecef;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    
    .helpful-links {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 8px;
      margin-top: 30px;
    }
    
    .helpful-links h3 {
      color: #333;
      margin-bottom: 15px;
      font-size: 18px;
    }
    
    .helpful-links ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }
    
    .helpful-links li {
      margin: 0;
    }
    
    .helpful-links a {
      color: #007acc;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s ease;
      display: inline-block;
    }
    
    .helpful-links a:hover {
      background: #007acc;
      color: white;
      transform: translateY(-1px);
    }
    
    @media (max-width: 768px) {
      .error-code {
        font-size: 80px;
      }
      
      h1 {
        font-size: 28px;
      }
      
      .error-message {
        font-size: 18px;
      }
      
      .actions {
        flex-direction: column;
        align-items: center;
      }
      
      .btn-primary, .btn-secondary {
        width: 200px;
      }
      
      .helpful-links ul {
        flex-direction: column;
        align-items: center;
      }
    }
  `]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']);
  }

  goBack() {
    window.history.back();
  }
}
