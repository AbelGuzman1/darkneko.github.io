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
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Descargar CV
        url: uploads/CV_Abel_Guzmán_Software_ITLA.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    content:
      title: '🚀 Mi Enfoque Técnico'
      subtitle: ''
      text: |-
        Especializado en desarrollo de software con enfoque en tecnologías modernas y metodologías ágiles. 
        Como estudiante del ITLA, aplico conocimientos en DevOps, automatización, contenedores Docker, 
        y desarrollo de aplicaciones web. Mi experiencia abarca desde programación en múltiples lenguajes 
        hasta la implementación de soluciones de infraestructura y análisis de datos.
        ¡Colaboremos en proyectos innovadores! 😊
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
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  - block: collection
    id: talks
    content:
      title: Charlas Recientes y Próximas
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1
  - block: collection
    id: news
    content:
      title: Noticias Recientes
      subtitle: ''
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
---
