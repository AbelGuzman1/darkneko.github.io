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
      title: 📧 Contacto
      subtitle: 🤝 ¡Conectemos y colaboremos!
      text: |
        🚀 ¿Tienes un proyecto interesante? 💡 ¿Quieres colaborar o simplemente charlar sobre tecnología? 
        ✨ No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.
      
      # Formulario de contacto
      form:
        provider: formspree
        formspree:
          id: mwpqnpzo
        fields:
          - name: nombre
            label: 👤 Nombre completo
            type: text
            required: true
          - name: email
            label: 📧 Correo electrónico  
            type: email
            required: true
          - name: asunto
            label: 📋 Asunto
            type: text
            required: true
          - name: mensaje
            label: 💬 Mensaje
            type: textarea
            required: true
            placeholder: Cuéntame sobre tu proyecto o idea...
      
      # Enlaces de redes sociales
      social:
        - icon: fab fa-github
          name: GitHub
          url: 'https://github.com/abelguzman1'
          description: 💻 Mis proyectos y código
        - icon: fab fa-linkedin
          name: LinkedIn
          url: 'https://linkedin.com/in/abelguzman'
          description: 🤝 Red profesional
        - icon: fab fa-twitter
          name: Twitter
          url: 'https://twitter.com/abeldev'
          description: 🐦 Pensamientos y actualizaciones
        - icon: fas fa-envelope
          name: Email
          url: 'mailto:abel.guzman@email.com'
          description: 📧 Contacto directo
        - icon: fab fa-whatsapp
          name: WhatsApp
          url: 'https://wa.me/18091234567'
          description: 📱 Chat rápido
    design:
      columns: '1'
      background:
        gradient_start: '#1e3a2e'
        gradient_end: '#20c997'
        text_color_light: true
      css_class: 'contact-section-dynamic'
      css_style: |
        .contact-section-dynamic {
          background: linear-gradient(135deg, #1e3a2e 0%, #2d5a3d 30%, #198754 70%, #20c997 100%);
          padding: 4rem 2rem;
          margin: 0;
          position: relative;
          overflow: hidden;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          animation: gradientShift 8s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0%, 100% { background: linear-gradient(135deg, #1e3a2e 0%, #2d5a3d 30%, #198754 70%, #20c997 100%); }
          50% { background: linear-gradient(135deg, #2d5a3d 0%, #198754 20%, #20c997 60%, #1e3a2e 100%); }
        }
        
        [data-theme="dark"] .contact-section-dynamic {
          background: linear-gradient(135deg, #0f2419 0%, #1a3326 30%, #145a3c 70%, #1aa179 100%);
        }
        
        [data-theme="dark"] .contact-section-dynamic {
          animation: gradientShiftDark 8s ease-in-out infinite;
        }
        
        @keyframes gradientShiftDark {
          0%, 100% { background: linear-gradient(135deg, #0f2419 0%, #1a3326 30%, #145a3c 70%, #1aa179 100%); }
          50% { background: linear-gradient(135deg, #1a3326 0%, #145a3c 20%, #1aa179 60%, #0f2419 100%); }
        }
        
        .contact-section-dynamic::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dynamicPattern" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.15)"><animate attributeName="r" values="1;2;1" dur="3s" repeatCount="indefinite"/></circle><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"><animate attributeName="r" values="0.5;1.5;0.5" dur="4s" repeatCount="indefinite"/></circle><circle cx="40" cy="80" r="1.2" fill="rgba(255,255,255,0.12)"><animate attributeName="r" values="1;1.8;1" dur="5s" repeatCount="indefinite"/></circle></pattern></defs><rect width="100%" height="100%" fill="url(%23dynamicPattern)"/></svg>');
          opacity: 0.4;
        }
        
        .contact-section-dynamic h2 {
          color: white;
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          animation: titleGlow 3s ease-in-out infinite alternate;
        }
        
        @keyframes titleGlow {
          from { text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
          to { text-shadow: 0 2px 20px rgba(255,255,255,0.3), 0 0 30px rgba(32,201,151,0.5); }
        }
        
        .contact-section-dynamic .subtitle {
          color: rgba(255, 255, 255, 0.95);
          text-align: center;
          font-size: 1.4rem;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .contact-section-dynamic .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }
        
        .contact-section-dynamic .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: white;
          backdrop-filter: blur(10px);
          min-width: 120px;
        }
        
        .contact-section-dynamic .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .contact-section-dynamic .social-link i {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .contact-section-dynamic .social-link:hover i {
          transform: scale(1.2) rotate(5deg);
        }
        
        .contact-section-dynamic .social-link .social-name {
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .contact-section-dynamic .social-link .social-desc {
          font-size: 0.8rem;
          opacity: 0.9;
          text-align: center;
          margin-top: 0.3rem;
        }
---
