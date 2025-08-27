import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <h2>Contact Us</h2>
      <div class="contact-content">
        <div class="contact-info">
          <h3>Get in Touch</h3>
          <div class="info-item">
            <i class="icon">📧</i>
            <div>
              <strong>Email:</strong>
              <p>info&#64;mvcwithangular.com</p>
            </div>
          </div>
          <div class="info-item">
            <i class="icon">📱</i>
            <div>
              <strong>Phone:</strong>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div class="info-item">
            <i class="icon">📍</i>
            <div>
              <strong>Address:</strong>
              <p>123 Development Street<br>Tech City, TC 12345</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>Send us a Message</h3>
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="contact.name" 
                required
                class="form-control"
                placeholder="Your full name">
            </div>
            
            <div class="form-group">
              <label for="email">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="contact.email" 
                required
                class="form-control"
                placeholder="your.email@example.com">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                [(ngModel)]="contact.subject" 
                class="form-control"
                placeholder="What's this about?">
            </div>
            
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="contact.message" 
                required
                rows="5"
                class="form-control"
                placeholder="Your message here..."></textarea>
            </div>
            
            <button type="submit" class="btn-submit" [disabled]="!contactForm.form.valid">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      margin-top: 20px;
    }
    
    .contact-info, .contact-form {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 8px;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .icon {
      font-size: 24px;
      margin-right: 15px;
      margin-top: 5px;
    }
    
    .info-item strong {
      color: #007acc;
      display: block;
      margin-bottom: 5px;
    }
    
    .info-item p {
      margin: 0;
      line-height: 1.4;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #333;
    }
    
    .form-control {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;
    }
    
    .form-control:focus {
      outline: none;
      border-color: #007acc;
      box-shadow: 0 0 0 2px rgba(0,122,204,0.2);
    }
    
    .btn-submit {
      background: #007acc;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .btn-submit:hover:not(:disabled) {
      background: #005a9e;
    }
    
    .btn-submit:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
  `]
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // In a real application, you would send this to your backend
    console.log('Contact form submitted:', this.contact);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.contact = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
