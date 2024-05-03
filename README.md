# Firebase Phone Authentication with Next.js

This project demonstrates how to implement Firebase Phone Authentication with Next.js.

## Installation

1. Install dependencies using [pnpm](https://pnpm.io/):

   ```bash
   pnpm install
   ```
2.Run the project:
 ```bash
  pnpm dev .
 ```

## Firebase Setup
Go to the Firebase [Console](https://console.firebase.google.com/)
Click "Get Started", then "Add project".
Enter a project name and follow the steps to create the project.
Once your project is created, click on "Web" to register your app.
Give your app a name and copy the Firebase configuration code.

// config.js

```bash
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};
```

export default firebaseConfig;

Paste the Firebase configuration into config.js in your project.
Firebase Authentication Setup
In the Firebase Console, navigate to Authentication.
Click "Get Started", then "Phone".
Enable Phone Authentication and save the changes.
Running the Code
After setting up Firebase and configuring the project:

Run the project using:
bash
Copy code
pnpm dev
Open your browser and navigate to the specified URL to view the application.
