# Webforge Contact Form Setup

## Running Both Servers

The project now has a frontend (Vite React) and an API server for contact form submissions.

### Terminal 1: Start the Vite dev server
```bash
npm run dev
```
- Frontend runs on `http://localhost:5173`

### Terminal 2: Start the API server
```bash
npm run api
```
- API runs on `http://localhost:3001`
- Contact endpoint: `POST /api/contact`

## Contact Form Flow

1. User fills out the contact form in the Contact section
2. On submit, form data is POSTed to `/api/contact` as JSON
3. API validates required fields (name, email, need, details)
4. API stores submission in memory and returns success response
5. Frontend shows success message and clears form
6. If error occurs, frontend displays error message

## API Endpoint

### POST /api/contact

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "need": "E-commerce Website",
  "details": "We need a new e-commerce store..."
}
```

Response (success):
```json
{
  "success": true,
  "message": "Your message has been received. We will get back to you soon.",
  "id": 1234567890
}
```

Response (error):
```json
{
  "error": "Missing required fields: name, email, need, details"
}
```

## Frontend States

- **Idle**: Form is ready for input
- **Loading**: Button shows "Sending…" and is disabled
- **Success**: Green success message displays, form clears
- **Error**: Red error message displays, form retains data

## Notes

- Submissions are stored in memory (lost on server restart)
- For production, connect to a database or email service
- All form data is sent securely via HTTPS in production
- No API keys are exposed in the frontend
- Email validation is performed on both frontend and backend
