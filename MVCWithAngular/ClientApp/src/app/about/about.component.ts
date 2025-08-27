import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h2>About This Application</h2>
      <div class="about-content">
        <div class="tech-stack">
          <h3>Technology Stack</h3>
          <div class="tech-grid">
            <div class="tech-item">
              <h4>Backend</h4>
              <ul>
                <li>ASP.NET Core 8.0</li>
                <li>MVC Architecture</li>
                <li>C# with .NET</li>
              </ul>
            </div>
            <div class="tech-item">
              <h4>Frontend</h4>
              <ul>
                <li>Angular 17+</li>
                <li>Standalone Components</li>
                <li>TypeScript</li>
                <li>Lazy Loading</li>
              </ul>
            </div>
            <div class="tech-item">
              <h4>Features</h4>
              <ul>
                <li>SPA Integration</li>
                <li>Responsive Design</li>
                <li>Modern UI/UX</li>
                <li>Cross-platform</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="description">
          <h3>Project Overview</h3>
          <p>
            This is a hybrid application that combines the power of ASP.NET Core MVC 
            with the modern capabilities of Angular. The backend provides robust server-side 
            functionality while the Angular frontend delivers a dynamic, responsive user experience.
          </p>
          <p>
            Built with modern development practices including lazy loading, standalone components, 
            and integrated build processes that ensure both applications work seamlessly together.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .about-content {
      margin-top: 20px;
    }
    
    .tech-stack {
      margin-bottom: 30px;
    }
    
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 15px;
    }
    
    .tech-item {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #007acc;
    }
    
    .tech-item h4 {
      color: #007acc;
      margin-bottom: 10px;
    }
    
    .tech-item ul {
      list-style: none;
      padding: 0;
    }
    
    .tech-item li {
      padding: 5px 0;
      border-bottom: 1px solid #e9ecef;
    }
    
    .tech-item li:last-child {
      border-bottom: none;
    }
    
    .description {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
    }
    
    .description p {
      line-height: 1.6;
      margin-bottom: 15px;
    }
  `]
})
export class AboutComponent {
}
