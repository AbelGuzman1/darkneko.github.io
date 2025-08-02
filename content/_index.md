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
      title: Contacto
      subtitle: ¡Conectemos y colaboremos!
      text: |-
        ¿Tienes un proyecto interesante? ¿Quieres colaborar o simplemente charlar sobre tecnología? 
        No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.
        
        <style>
        /* Contenedor principal con gradiente verde similar al "Sobre Mí" */
        .contact-container {
          background: linear-gradient(135deg, #0d6efd 0%, #198754 50%, #20c997 100%);
          padding: 4rem 2rem;
          margin: 2rem -2rem;
          position: relative;
          overflow: hidden;
        }
        
        /* Patrón de fondo similar al de "Sobre Mí" */
        .contact-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        /* Formulario neutro y limpio */
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 2;
        }
        
        [data-theme="dark"] .contact-form {
          background: rgba(40, 44, 52, 0.95);
          color: #f8f9fa;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }
        
        [data-theme="dark"] .form-label {
          color: #f8f9fa;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #fff;
          color: #333;
          box-sizing: border-box;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.1);
        }
        
        [data-theme="dark"] .form-input, [data-theme="dark"] .form-textarea {
          background: #495057;
          color: #f8f9fa;
          border-color: #6c757d;
        }
        
        [data-theme="dark"] .form-input:focus, [data-theme="dark"] .form-textarea:focus {
          border-color: #20c997;
          box-shadow: 0 0 0 3px rgba(32, 201, 151, 0.1);
        }
        
        .submit-btn {
          background: #198754;
          color: white;
          padding: 0.875rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .submit-btn:hover {
          background: #157347;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(25, 135, 84, 0.3);
        }
        
        .form-success {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: #198754;
          text-align: center;
          font-weight: 500;
        }
        
        [data-theme="dark"] .form-success {
          color: #20c997;
        }
        
        /* Título en la sección verde */
        .contact-title {
          color: white;
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .contact-subtitle {
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
        }
        </style>
        
        <div class="contact-container">
          <div class="contact-title">
            <h2 style="color: white; margin: 0; font-size: 2.5rem; font-weight: 700;">Contacto</h2>
          </div>
          <div class="contact-subtitle">
            <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 1.1rem;">¡Conectemos y colaboremos!</p>
            <p style="color: rgba(255, 255, 255, 0.8); margin-top: 0.5rem; font-size: 1rem;">¿Tienes un proyecto interesante? ¿Quieres colaborar o simplemente charlar sobre tecnología?</p>
          </div>
          
          <form action="https://formspree.io/f/mwpqnpzo" method="POST" class="contact-form">
            <div class="form-group">
              <label for="nombre" class="form-label">Nombre completo</label>
              <input type="text" id="nombre" name="nombre" required class="form-input" />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Correo electrónico</label>
              <input type="email" id="email" name="_replyto" required class="form-input" />
            </div>
            
            <div class="form-group">
              <label for="asunto" class="form-label">Asunto</label>
              <input type="text" id="asunto" name="_subject" required class="form-input" />
            </div>
            
            <div class="form-group">
              <label for="mensaje" class="form-label">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="5" required class="form-textarea"></textarea>
            </div>
            
            <input type="hidden" name="_next" value="https://abelguzman1.github.io/darkneko.github.io/#contact" />
            <input type="hidden" name="_language" value="es" />
            
            <button type="submit" class="submit-btn">Enviar Mensaje</button>
            
            <p class="form-success">Formulario configurado y listo para recibir mensajes</p>
          </form>
        </div>
    design:
      columns: '1'
---
