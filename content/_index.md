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
        /* Estilos adaptativos para tema claro/oscuro */
        .contact-form {
          max-width: 650px;
          margin: 2rem auto;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, rgba(25, 135, 84, 0.05) 0%, rgba(25, 135, 84, 0.1) 100%);
          border: 1px solid rgba(25, 135, 84, 0.2);
        }
        
        [data-theme="dark"] .contact-form {
          background: linear-gradient(135deg, rgba(25, 135, 84, 0.1) 0%, rgba(25, 135, 84, 0.15) 100%);
          border: 1px solid rgba(25, 135, 84, 0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        
        .form-group {
          margin-bottom: 1.75rem;
          position: relative;
        }
        
        .form-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: #198754;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }
        
        [data-theme="dark"] .form-label {
          color: #20c997;
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          border: 2px solid rgba(25, 135, 84, 0.2);
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.8);
          color: #333;
          box-sizing: border-box;
        }
        
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #198754;
          box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.1);
          transform: translateY(-2px);
        }
        
        [data-theme="dark"] .form-input, [data-theme="dark"] .form-textarea {
          background: rgba(40, 44, 52, 0.8);
          color: #f8f9fa;
          border-color: rgba(25, 135, 84, 0.3);
        }
        
        [data-theme="dark"] .form-input:focus, [data-theme="dark"] .form-textarea:focus {
          border-color: #20c997;
          box-shadow: 0 0 0 3px rgba(32, 201, 151, 0.2);
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #198754 0%, #20c997 100%);
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(25, 135, 84, 0.3);
          letter-spacing: 0.5px;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(25, 135, 84, 0.4);
          background: linear-gradient(135deg, #157347 0%, #1aa179 100%);
        }
        
        .form-success {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #198754;
          text-align: center;
          font-weight: 500;
        }
        
        [data-theme="dark"] .form-success {
          color: #20c997;
        }
        </style>
        
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
          
          <div style="text-align: center;">
            <button type="submit" class="submit-btn">Enviar Mensaje</button>
          </div>
          
          <p class="form-success">Formulario configurado y listo para recibir mensajes</p>
        </form>
    design:
      columns: '1'
---
