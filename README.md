# CRUD Application using Next.js

## Screenshots

![screenshots](screenshots/screenshot1.png)
![screenshots](screenshots/screenshot2.png)

## How to Run the Application

### Steps

1. Clone the repository and navigate to the application folder:

2. Install the dependencies using npm:
   ```bash
   npm install```
4. Create an environment file (.env)  and add the following environment variables:

```python
GOOGLE_CLIENT_ID="client_id"
 GOOGLE_CLIENT_SECRET="client_secret"
GITHUB_SECRET="GitHub_secret"
MONGODB_URI="mongo_url"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
NEXTAUTH_SECRET="your_secret_key"
```

Note: Obtain the OAuth2 credentials from the respective providers.

4. Start the development server:
   ```bash
   npm run dev```

This command will run the application in development mode.

5. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

Note: Make sure to replace `client_id`, `client_secret`, `GitHub_secret`, `mongo_url`, and `your_secret_key` with the actual values for your environment.

Enjoy using the Crude Application built with Next.js!
