# Permissions Management System

A simple React-based Permissions Management system for handling the addition, modification, and deletion of permissions, with real-time feedback via toast notifications.

## Overview

This project is a user-friendly interface for managing permissions in a system. The key features include:

- **Add Permission**: Allows users to add new permissions.
- **Delete Permission**: Provides functionality to delete existing permissions.
- **Toast Notifications**: Real-time feedback is given to users when actions like adding or deleting permissions are performed.
- **Table Display**: A dynamic table that displays all permissions with an option to delete them.

The application uses **React** for the frontend, **Tailwind CSS** for styling, and **react-toastify** for displaying toast notifications.

## Features

- **Add Permission**: Users can add a new permission by entering its name in an input field.
- **Delete Permission**: Users can delete any permission from the list.
- **Real-time Feedback**: Toast notifications inform the user whether a permission was successfully added or deleted.
- **Responsive UI**: The layout is fully responsive, designed with Tailwind CSS to look good on all devices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **React** (v17 or higher)
- **Tailwind CSS** (v2.x or higher)
- **react-toastify** (for toast notifications)

## Installation

Follow these steps to set up and run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/permissions-management.git
   cd permissions-management
  ```
2.Install dependencies: Install all the required dependencies using npm.

```bash
npm install
```
Start the development server: Once the dependencies are installed, run the application with the following command:

```bash

npm start
```

--This will start the React development server, and you can view the app in your browser at http://localhost:3000.

--Open the app: Open your browser and go to the following URL to see the app in action:
```bash
http://localhost:3000
```

# Usage
- Adding a Permission
- Click the Add Permission button on the top right of the page.
- A modal will appear prompting you to enter the name of the permission.
- Enter a name for the permission and click Save Permission.
- The new permission will be added to the table and a success toast notification will appear.
  
# Deleting a Permission
- In the permissions table, click the Delete button next to any permission you want to remove.
- A success toast notification will appear confirming the deletion of the permission.
- 
# Toast Notifications
- Success: Green toast notification appears when a permission is added or deleted successfully.
- Error: If there is an error (e.g., trying to add an empty permission name), a red toast notification will appear.
# Thank You
