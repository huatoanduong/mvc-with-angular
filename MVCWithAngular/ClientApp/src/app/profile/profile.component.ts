import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <h2>User Profile</h2>
      
      <div class="profile-content">
        <div class="profile-header">
          <div class="profile-avatar">
            <div class="avatar-placeholder">👤</div>
            <button class="change-avatar-btn">Change Photo</button>
          </div>
          
          <div class="profile-info">
            <h3>{{ user.name }}</h3>
            <p class="user-role">{{ user.role }}</p>
            <p class="user-email">{{ user.email }}</p>
            <p class="member-since">Member since {{ user.memberSince }}</p>
          </div>
        </div>
        
        <div class="profile-sections">
          <div class="profile-section">
            <h3>Personal Information</h3>
            <form (ngSubmit)="onPersonalInfoSubmit()" #personalForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    [(ngModel)]="user.firstName" 
                    required
                    class="form-control">
                </div>
                
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    [(ngModel)]="user.lastName" 
                    required
                    class="form-control">
                </div>
              </div>
              
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea 
                  id="bio" 
                  name="bio" 
                  [(ngModel)]="user.bio" 
                  rows="3"
                  class="form-control"
                  placeholder="Tell us about yourself..."></textarea>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="user.phone" 
                    class="form-control">
                </div>
                
                <div class="form-group">
                  <label for="location">Location</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    [(ngModel)]="user.location" 
                    class="form-control">
                </div>
              </div>
              
              <button type="submit" class="btn-save" [disabled]="!personalForm.form.valid">
                Save Changes
              </button>
            </form>
          </div>
          
          <div class="profile-section">
            <h3>Account Settings</h3>
            <div class="settings-list">
              <div class="setting-item">
                <div class="setting-info">
                  <h4>Email Notifications</h4>
                  <p>Receive email updates about your account</p>
                </div>
                <label class="switch">
                  <input type="checkbox" [(ngModel)]="settings.emailNotifications">
                  <span class="slider"></span>
                </label>
              </div>
              
              <div class="setting-item">
                <div class="setting-info">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <label class="switch">
                  <input type="checkbox" [(ngModel)]="settings.twoFactorAuth">
                  <span class="slider"></span>
                </label>
              </div>
              
              <div class="setting-item">
                <div class="setting-info">
                  <h4>Public Profile</h4>
                  <p>Allow others to see your profile information</p>
                </div>
                <label class="switch">
                  <input type="checkbox" [(ngModel)]="settings.publicProfile">
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            
            <button class="btn-save" (click)="onSettingsSave()">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    
    .profile-header {
      display: flex;
      align-items: center;
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    
    .profile-avatar {
      text-align: center;
      margin-right: 30px;
    }
    
    .avatar-placeholder {
      width: 100px;
      height: 100px;
      background: #f8f9fa;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin-bottom: 15px;
      border: 3px solid #007acc;
    }
    
    .change-avatar-btn {
      background: #007acc;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    
    .profile-info h3 {
      margin: 0 0 10px 0;
      color: #333;
    }
    
    .user-role {
      color: #007acc;
      font-weight: 500;
      margin: 5px 0;
    }
    
    .user-email {
      color: #666;
      margin: 5px 0;
    }
    
    .member-since {
      color: #999;
      font-size: 14px;
      margin: 5px 0;
    }
    
    .profile-sections {
      display: grid;
      gap: 30px;
    }
    
    .profile-section {
      background: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
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
    }
    
    .form-control:focus {
      outline: none;
      border-color: #007acc;
      box-shadow: 0 0 0 2px rgba(0,122,204,0.2);
    }
    
    .btn-save {
      background: #007acc;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 10px;
    }
    
    .btn-save:hover:not(:disabled) {
      background: #005a9e;
    }
    
    .btn-save:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    
    .settings-list {
      margin-bottom: 20px;
    }
    
    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid #eee;
    }
    
    .setting-item:last-child {
      border-bottom: none;
    }
    
    .setting-info h4 {
      margin: 0 0 5px 0;
      color: #333;
    }
    
    .setting-info p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
    
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }
    
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
      border-radius: 34px;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
    
    input:checked + .slider {
      background-color: #007acc;
    }
    
    input:checked + .slider:before {
      transform: translateX(26px);
    }
    
    @media (max-width: 768px) {
      .profile-header {
        flex-direction: column;
        text-align: center;
      }
      
      .profile-avatar {
        margin-right: 0;
        margin-bottom: 20px;
      }
      
      .form-row {
        grid-template-columns: 1fr;
        gap: 0;
      }
    }
  `]
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    role: 'Software Developer',
    email: 'john.doe@example.com',
    memberSince: 'January 2024',
    firstName: 'John',
    lastName: 'Doe',
    bio: 'Passionate software developer with expertise in Angular and .NET technologies.',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  };

  settings = {
    emailNotifications: true,
    twoFactorAuth: false,
    publicProfile: true
  };

  onPersonalInfoSubmit() {
    console.log('Personal info updated:', this.user);
    alert('Personal information updated successfully!');
  }

  onSettingsSave() {
    console.log('Settings updated:', this.settings);
    alert('Settings saved successfully!');
  }
}
