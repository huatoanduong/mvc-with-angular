# Angular Client Application

This is the Angular client application that runs alongside the ASP.NET Core MVC application.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Setup

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```

3. For development with hot reload:
   ```bash
   npm start
   # or
   yarn start
   ```

## Build Output

The built Angular application will be output to `../wwwroot/angular/` directory, which is served by the MVC application.

## Development

- The application uses Angular 17+ with standalone components
- Lazy loading is configured for better performance
- The build output is configured to integrate with the MVC application

## Access

Once built and the MVC application is running, you can access the Angular application at:
- `/angular` - Main Angular application
- `/angular/home` - Home component
