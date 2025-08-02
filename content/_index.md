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

  - block: contact
    id: contact
    content:
      title: Contacto
      subtitle: ¡Conectemos y colaboremos!
      text: |-
        ¿Tienes un proyecto interesante? ¿Quieres colaborar o simplemente charlar sobre tecnología? 
        No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.
      
      # Contact details - edit or remove options as needed
      email: abelg4446@gmail.com
      phone: +1 809 351 8297
      address:
        street: República Dominicana
        city: Santo Domingo
        region: Distrito Nacional
        postcode: ''
        country: República Dominicana
        country_code: DO
      
      # Contact form
      form:
        provider: netlify
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '1'

  - block: markdown
    content:
      title: ""
      text: |-
        <div style="text-align: center; margin-top: 2rem;">
          <h3>También puedes encontrarme en:</h3>
          <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap;">
            <a href="mailto:abelg4446@gmail.com" style="text-decoration: none; color: inherit;">
              <div style="display: flex; flex-direction: column; align-items: center; padding: 1rem;">
                <i class="fas fa-envelope" style="font-size: 2.5rem; color: #dc3545; margin-bottom: 0.5rem;"></i>
                <span style="font-weight: 500;">Email</span>
              </div>
            </a>
            <a href="https://github.com/AbelGuzman1" target="_blank" style="text-decoration: none; color: inherit;">
              <div style="display: flex; flex-direction: column; align-items: center; padding: 1rem;">
                <i class="fab fa-github" style="font-size: 2.5rem; color: #333; margin-bottom: 0.5rem;"></i>
                <span style="font-weight: 500;">GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/abeleliasguzman/" target="_blank" style="text-decoration: none; color: inherit;">
              <div style="display: flex; flex-direction: column; align-items: center; padding: 1rem;">
                <i class="fab fa-linkedin" style="font-size: 2.5rem; color: #0077b5; margin-bottom: 0.5rem;"></i>
                <span style="font-weight: 500;">LinkedIn</span>
              </div>
            </a>
            <a href="https://wa.me/8093518297" target="_blank" style="text-decoration: none; color: inherit;">
              <div style="display: flex; flex-direction: column; align-items: center; padding: 1rem;">
                <i class="fab fa-whatsapp" style="font-size: 2.5rem; color: #25d366; margin-bottom: 0.5rem;"></i>
                <span style="font-weight: 500;">WhatsApp</span>
              </div>
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
