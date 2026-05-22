export default function Gallery() {
  const projects = [
    { id: 1, title: 'Project One', color: '#FF6B6B' },
    { id: 2, title: 'Project Two', color: '#4ECDC4' },
    { id: 3, title: 'Project Three', color: '#45B7D1' },
    { id: 4, title: 'Project Four', color: '#FFA07A' },
    { id: 5, title: 'Project Five', color: '#98D8C8' },
    { id: 6, title: 'Project Six', color: '#F7DC6F' }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {projects.map(project => (
            <div
              key={project.id}
              className="gallery-item"
              style={{ backgroundColor: project.color }}
            >
              <p>{project.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
