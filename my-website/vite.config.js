import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    middlewareMode: false,
    middleware: [],
  },
})

// Mock API middleware for development - stores submissions in memory
let submissions = []

export function createMiddleware() {
  return async (req, res, next) => {
    if (req.method === 'POST' && req.url === '/api/contact') {
      let body = ''

      req.on('data', chunk => {
        body += chunk.toString()
      })

      req.on('end', () => {
        try {
          const data = JSON.parse(body)
          
          // Validate required fields
          if (!data.name || !data.email || !data.need || !data.details) {
            return res
              .writeHead(400, { 'Content-Type': 'application/json' })
              .end(JSON.stringify({ error: 'Missing required fields: name, email, need, details' }))
          }

          // Store submission
          submissions.push({
            ...data,
            timestamp: new Date().toISOString(),
            id: Date.now()
          })

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({
            success: true,
            message: 'Your message has been received. We will get back to you soon.',
            id: submissions[submissions.length - 1].id
          }))
        } catch {
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Invalid JSON' }))
        }
      })
    } else {
      next()
    }
  }
}

