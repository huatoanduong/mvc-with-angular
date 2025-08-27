import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <h2>Dashboard</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📊</div>
          <div class="stat-content">
            <h3>Total Users</h3>
            <div class="stat-number">1,247</div>
            <div class="stat-change positive">+12% from last month</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">💰</div>
          <div class="stat-content">
            <h3>Revenue</h3>
            <div class="stat-number">$45,678</div>
            <div class="stat-change positive">+8% from last month</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">📈</div>
          <div class="stat-content">
            <h3>Growth</h3>
            <div class="stat-number">23.5%</div>
            <div class="stat-change positive">+2.1% from last month</div>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-content">
            <h3>Conversion</h3>
            <div class="stat-number">3.2%</div>
            <div class="stat-change negative">-0.5% from last month</div>
          </div>
        </div>
      </div>
      
      <div class="dashboard-content">
        <div class="chart-section">
          <h3>Monthly Performance</h3>
          <div class="chart-placeholder">
            <div class="chart-bars">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 45%"></div>
              <div class="bar" style="height: 90%"></div>
              <div class="bar" style="height: 75%"></div>
              <div class="bar" style="height: 85%"></div>
            </div>
            <div class="chart-labels">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </div>
        
        <div class="recent-activity">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon">👤</div>
              <div class="activity-content">
                <div class="activity-title">New user registered</div>
                <div class="activity-time">2 minutes ago</div>
              </div>
            </div>
            
            <div class="activity-item">
              <div class="activity-icon">💳</div>
              <div class="activity-content">
                <div class="activity-title">Payment received</div>
                <div class="activity-time">15 minutes ago</div>
              </div>
            </div>
            
            <div class="activity-item">
              <div class="activity-icon">📧</div>
              <div class="activity-content">
                <div class="activity-title">Support ticket created</div>
                <div class="activity-time">1 hour ago</div>
              </div>
            </div>
            
            <div class="activity-item">
              <div class="activity-icon">🔄</div>
              <div class="activity-content">
                <div class="activity-title">System backup completed</div>
                <div class="activity-time">3 hours ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      transition: transform 0.2s;
    }
    
    .stat-card:hover {
      transform: translateY(-2px);
    }
    
    .stat-icon {
      font-size: 40px;
      margin-right: 15px;
    }
    
    .stat-number {
      font-size: 28px;
      font-weight: bold;
      color: #007acc;
      margin: 5px 0;
    }
    
    .stat-change {
      font-size: 12px;
      font-weight: 500;
    }
    
    .stat-change.positive {
      color: #28a745;
    }
    
    .stat-change.negative {
      color: #dc3545;
    }
    
    .dashboard-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 30px;
    }
    
    .chart-section, .recent-activity {
      background: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .chart-placeholder {
      margin-top: 20px;
      text-align: center;
    }
    
    .chart-bars {
      display: flex;
      justify-content: space-around;
      align-items: end;
      height: 200px;
      margin-bottom: 15px;
    }
    
    .bar {
      width: 40px;
      background: linear-gradient(to top, #007acc, #005a9e);
      border-radius: 4px 4px 0 0;
      transition: height 0.3s;
    }
    
    .chart-labels {
      display: flex;
      justify-content: space-around;
      color: #666;
      font-size: 14px;
    }
    
    .activity-list {
      margin-top: 20px;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #eee;
    }
    
    .activity-item:last-child {
      border-bottom: none;
    }
    
    .activity-icon {
      font-size: 20px;
      margin-right: 15px;
      width: 30px;
      text-align: center;
    }
    
    .activity-title {
      font-weight: 500;
      margin-bottom: 5px;
    }
    
    .activity-time {
      font-size: 12px;
      color: #666;
    }
    
    @media (max-width: 768px) {
      .dashboard-content {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      
      .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }
  `]
})
export class DashboardComponent {
}
