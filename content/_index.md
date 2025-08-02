---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing
design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    id: about
    content:
      # Choose a user profile to display (a folder name within content/authors/)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Descargar CV
        url: uploads/CV_Abel_Guzman_Software_ITLA.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to assets/media/.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: 'Mi Enfoque Técnico'
      subtitle: 'Tecnólogo en Desarrollo de Software - ITLA'
      text: |-
        Especializado en desarrollo de software con enfoque en tecnologías modernas y metodologías ágiles.
        Como estudiante del ITLA, aplico conocimientos en DevOps, automatización, contenedores Docker,
        y desarrollo de aplicaciones web. Mi experiencia abarca desde programación en múltiples lenguajes
        hasta la implementación de soluciones de infraestructura y análisis de datos.
        
        **Áreas de Expertise:**
        - Desarrollo Full-Stack (Frontend & Backend)
        - DevOps y Contenedores (Docker, Kubernetes)
        - Servicios en la Nube (Azure, AWS)
        - Análisis de Datos y Business Intelligence
        - Automatización de Procesos
        
        ¡Colaboremos en proyectos innovadores! 
    design:
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Publicaciones Destacadas
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: article-grid
      columns: 2

  - block: collection
    content:
      title: Publicaciones Recientes
      text: "Explora mis últimas contribuciones académicas y técnicas"
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation

  - block: collection
    id: talks
    content:
      title: Charlas y Presentaciones
      subtitle: "Conferencias, workshops y presentaciones técnicas"
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1

  - block: collection
    id: news
    content:
      title: Noticias y Actualizaciones
      subtitle: 'Mantente al día con mis últimas actividades'
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]

  - block: markdown
    id: contact
    content:
      title: ""
      subtitle: ""
      text: |-
        <style>
        .contact-section {
          background: linear-gradient(135deg, #1e3a2e 0%, #2d5a3d 30%, #198754 70%, #20c997 100%);
          padding: 3rem 2rem;
          margin: 0 -2rem;
          border-radius: 0;
          color: white;
        }
        [data-theme="dark"] .contact-section {
          background: linear-gradient(135deg, #0f2419 0%, #1a3326 30%, #145a3c 70%, #1aa179 100%);
        }
        .contact-section h2, .contact-section h3 {
          color: white !important;
          text-align: center;
        }
        .contact-form {
          max-width: 600px;
          margin: 0 auto 3rem auto;
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: white;
          font-weight: bold;
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          background: rgba(255,255,255,0.95);
          color: #333;
          box-sizing: border-box;
        }
        .submit-btn {
          background: #198754;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
        }
        .submit-btn:hover {
          background: #157347;
          transform: translateY(-2px);
        }
        .social-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: rgba(255,255,255,0.15);
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          min-height: 50px;
          font-size: 1rem;
        }
        .social-link:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-3px);
          color: white;
        }
        @media (max-width: 768px) {
          .contact-section {
            padding: 2rem 1rem;
            margin: 0 -1rem;
          }
          .contact-form {
            padding: 1.5rem;
          }
          .social-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
            padding: 0 0.5rem;
          }
          .social-link {
            padding: 0.75rem;
            font-size: 0.9rem;
            min-height: 45px;
          }
        }
        @media (max-width: 480px) {
          .social-links {
            grid-template-columns: 1fr;
            max-width: 300px;
          }
        }
        </style>
        
        <div class="contact-section">
          <h2>📧 Contacto</h2>
          <h3>🤝 ¡Conectemos y colaboremos!</h3>
          <p style="text-align: center; font-size: 1.1rem; margin-bottom: 2rem;">
            🚀 ¿Tienes un proyecto interesante? 💡 ¿Quieres colaborar o simplemente charlar sobre tecnología? 
            ✨ No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.
          </p>
          
          <form class="contact-form" action="https://formspree.io/f/xpwljqqa" method="POST">
            <div class="form-group">
              <label for="nombre">👤 Nombre completo</label>
              <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre completo">
            </div>
            
            <div class="form-group">
              <label for="email">📧 Correo electrónico</label>
              <input type="email" id="email" name="_replyto" required placeholder="tu@email.com">
            </div>
            
            <div class="form-group">
              <label for="asunto">📋 Asunto</label>
              <input type="text" id="asunto" name="_subject" required placeholder="¿De qué quieres hablar?">
            </div>
            
            <div class="form-group">
              <label for="mensaje">💬 Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Cuéntame sobre tu proyecto o idea..."></textarea>
            </div>
            
            <input type="hidden" name="_next" value="https://abelguzman1.github.io/darkneko.github.io/#contact">
            <input type="hidden" name="_language" value="es">
            
            <button type="submit" class="submit-btn">🚀 Enviar Mensaje</button>
          </form>
          
          <div class="social-links">
            <a href="https://github.com/abelguzman1" target="_blank" class="social-link">GitHub</a>
            <a href="https://linkedin.com/in/abeleliasguzman" target="_blank" class="social-link">LinkedIn</a>
            <a href="mailto:abelg4446@gmail.com" class="social-link">Correo</a>
            <a href="https://wa.me/18091234567" target="_blank" class="social-link">WhatsApp</a>
          </div>
        </div>
        </div>
    design:
      columns: '1'
---
