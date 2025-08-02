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
      spacing:
        padding: ['60px', '0', '60px', '0']

  - block: markdown
    content:
      title: 'Propósito del Blog'
      subtitle: 'Compartiendo Conocimiento y Experiencias'
      text: |-
        Este espacio digital es mi ventana para compartir experiencias, aprendizajes y descubrimientos 
        en el fascinante mundo de la tecnología. Como estudiante del ITLA, creo firmemente en el 
        poder del conocimiento compartido y la colaboración.
        
        **¿Qué encontrarás aquí?**
        - Tutoriales y guías técnicas prácticas
        - Soluciones a problemas reales de desarrollo
        - Análisis de proyectos y casos de estudio
        - Experiencias con nuevas tecnologías y herramientas
        - Reflexiones sobre metodologías y mejores prácticas
        
        Mi objetivo es crear una comunidad donde podamos aprender juntos, compartir desafíos
        y celebrar los logros en nuestro camino hacia la excelencia técnica.
        
        ¡Espero que este contenido te sea útil y te inspire a seguir creciendo! 
    design:
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']

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
      spacing:
        padding: ['60px', '0', '60px', '0']

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
      spacing:
        padding: ['60px', '0', '60px', '0']

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
      spacing:
        padding: ['60px', '0', '60px', '0']

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
        padding: ['60px', '0', '60px', '0']

  - block: markdown
    id: contact
    content:
      title: "Contacto"
      subtitle: "¡Conectemos y colaboremos!"
      text: |-
        ¿Tienes un proyecto interesante? ¿Quieres colaborar o simplemente charlar sobre tecnología? 
        No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.
        
        <p><strong>Envíame un mensaje:</strong> <a href="mailto:abelg4446@gmail.com">abelg4446@gmail.com</a></p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
          <a href="https://github.com/AbelGuzman1" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 12px; color: white; text-decoration: none; font-weight: 600; transition: all 0.3s ease; min-height: 50px; font-size: 1rem;">
            <span>📁</span> GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/abeleliasguzman/" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 12px; color: white; text-decoration: none; font-weight: 600; transition: all 0.3s ease; min-height: 50px; font-size: 1rem;">
            <span>💼</span> LinkedIn
          </a>
          
          <a href="mailto:abelg4446@gmail.com" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 12px; color: white; text-decoration: none; font-weight: 600; transition: all 0.3s ease; min-height: 50px; font-size: 1rem;">
            <span>📧</span> Correo
          </a>
          
          <a href="https://wa.me/18093518297" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem; background: rgba(255,255,255,0.15); border-radius: 12px; color: white; text-decoration: none; font-weight: 600; transition: all 0.3s ease; min-height: 50px; font-size: 1rem;">
            <span>📱</span> WhatsApp
          </a>
        </div>
    design:
      columns: '1'
      spacing:
        padding: ['60px', '0', '60px', '0']
---
