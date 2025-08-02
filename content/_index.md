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
        
        ### 📧 Información de Contacto
        
        **📧 Email:** [abelg4446@gmail.com](mailto:abelg4446@gmail.com)  
        **📱 Teléfono:** +1 809 351 8297  
        **📍 Ubicación:** Santo Domingo, República Dominicana
        
        ### 📝 Formulario de Contacto
        
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" style="max-width: 600px; margin: 2rem auto; padding: 2rem; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="margin-bottom: 1.5rem;">
            <label for="nombre" style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">Nombre completo *</label>
            <input type="text" id="nombre" name="nombre" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; box-sizing: border-box;" />
          </div>
          
          <div style="margin-bottom: 1.5rem;">
            <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">Email *</label>
            <input type="email" id="email" name="_replyto" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; box-sizing: border-box;" />
          </div>
          
          <div style="margin-bottom: 1.5rem;">
            <label for="asunto" style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">Asunto *</label>
            <input type="text" id="asunto" name="_subject" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; box-sizing: border-box;" />
          </div>
          
          <div style="margin-bottom: 1.5rem;">
            <label for="mensaje" style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #333;">Mensaje *</label>
            <textarea id="mensaje" name="mensaje" rows="5" required style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; resize: vertical; box-sizing: border-box;"></textarea>
          </div>
          
          <input type="hidden" name="_next" value="https://abelguzman1.github.io/darkneko.github.io/#contact" />
          <input type="hidden" name="_language" value="es" />
          
          <button type="submit" style="background: #007bff; color: white; padding: 0.75rem 2rem; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.3s;" onmouseover="this.style.background='#0056b3'" onmouseout="this.style.background='#007bff'">
            📤 Enviar Mensaje
          </button>
          
          <p style="margin-top: 1rem; font-size: 0.875rem; color: #666; text-align: center;">
            💡 <em>Para configurar el formulario, necesitas crear una cuenta gratuita en <a href="https://formspree.io" target="_blank" style="color: #007bff;">Formspree.io</a> y reemplazar YOUR_FORM_ID</em>
          </p>
        </form>
    design:
      columns: '1'
      background:
        color: 'rgb(248, 249, 250)'
        text_color_light: false
      spacing:
        padding: ['2rem', '1rem', '1rem', '1rem']

  - block: markdown
    content:
      title: "Redes Sociales"
      text: |-
        <div style="text-align: center; margin-top: 1rem;">
          <p style="margin-bottom: 2rem; color: #666;">También puedes encontrarme en:</p>
          <div style="display: flex; justify-content: center; gap: 3rem; margin-top: 1.5rem; flex-wrap: wrap;">
            <a href="mailto:abelg4446@gmail.com" style="text-decoration: none; color: #dc3545; text-align: center; display: block;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📧</div>
              <span style="font-weight: 500; display: block;">Email</span>
            </a>
            <a href="https://github.com/AbelGuzman1" target="_blank" style="text-decoration: none; color: #333; text-align: center; display: block;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">💻</div>
              <span style="font-weight: 500; display: block;">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/abeleliasguzman/" target="_blank" style="text-decoration: none; color: #0077b5; text-align: center; display: block;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">💼</div>
              <span style="font-weight: 500; display: block;">LinkedIn</span>
            </a>
            <a href="https://wa.me/8093518297" target="_blank" style="text-decoration: none; color: #25d366; text-align: center; display: block;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📱</div>
              <span style="font-weight: 500; display: block;">WhatsApp</span>
            </a>
          </div>
        </div>
    design:
      columns: '1'
      background:
        color: 'rgb(247, 247, 247)'
        text_color_light: false
      spacing:
        padding: ['2rem', '1rem', '2rem', '1rem']
---
