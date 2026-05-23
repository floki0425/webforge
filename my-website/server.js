import http from 'http'
import url from 'url'

const submissions = []

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname

  if (req.method === 'POST' && pathname === '/api/contact') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      try {
        const data = JSON.parse(body)

        // Validate required fields
        if (!data.name || !data.email || !data.need || !data.details) {
          res.writeHead(400)
          return res.end(
            JSON.stringify({
              error: 'Missing required fields: name, email, need, details'
            })
          )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
          res.writeHead(400)
          return res.end(
            JSON.stringify({
              error: 'Invalid email format'
            })
          )
        }

        // Store submission
        const submission = {
          id: Date.now(),
          name: data.name.trim(),
          email: data.email.trim(),
          company: data.company?.trim() || '',
          need: data.need.trim(),
          details: data.details.trim(),
          timestamp: new Date().toISOString()
        }

        submissions.push(submission)

        // Log to console for development
        console.log(`\n✓ New contact submission (ID: ${submission.id})`)
        console.log(`  Name: ${submission.name}`)
        console.log(`  Email: ${submission.email}`)
        console.log(`  Company: ${submission.company || '(not provided)'}`)
        console.log(`  Need: ${submission.need}`)
        console.log(`  Time: ${submission.timestamp}\n`)

        res.writeHead(200)
        res.end(
          JSON.stringify({
            success: true,
            message: 'Your message has been received. We will get back to you soon.',
            id: submission.id
          })
        )
      } catch (err) {
        res.writeHead(400)
        res.end(JSON.stringify({ error: 'Invalid JSON in request body' }))
      }
    })
  } else if (req.method === 'GET' && pathname === '/api/contact') {
    // For development only - view submissions
    res.writeHead(200)
    res.end(JSON.stringify({ submissions: submissions.length, data: submissions }))
  } else {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Not found' }))
  }
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Contact API server running on http://localhost:${PORT}`)
  console.log(`POST /api/contact - Submit contact form`)
  console.log(`GET /api/contact - View submissions (dev only)`)
})
