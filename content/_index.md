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
      title: 📧 Contacto
      subtitle: 🤝 ¡Conectemos y colaboremos!
      text: |-
        <div class="contact-section">
          <!-- Font Awesome Icons CSS -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
          
          <style>
          .contact-section {
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
          
          [data-theme="dark"] .contact-section {
            background: linear-gradient(135deg, #0f2419 0%, #1a3326 30%, #145a3c 70%, #1aa179 100%);
            animation: gradientShiftDark 8s ease-in-out infinite;
          }
          
          @keyframes gradientShiftDark {
            0%, 100% { background: linear-gradient(135deg, #0f2419 0%, #1a3326 30%, #145a3c 70%, #1aa179 100%); }
            50% { background: linear-gradient(135deg, #1a3326 0%, #145a3c 20%, #1aa179 60%, #0f2419 100%); }
          }
          
          .contact-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dynamicPattern" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.15)"/><circle cx="80" cy="40" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="40" cy="80" r="1.2" fill="rgba(255,255,255,0.12)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dynamicPattern)"/></svg>');
            opacity: 0.4;
            animation: patternFloat 12s ease-in-out infinite;
          }
          
          @keyframes patternFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .contact-header {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
            z-index: 2;
          }
          
          .contact-header h2 {
            color: white;
            font-size: 2.8rem;
            margin-bottom: 1rem;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
            animation: titleGlow 3s ease-in-out infinite alternate;
          }
          
          @keyframes titleGlow {
            from { text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
            to { text-shadow: 0 2px 20px rgba(255,255,255,0.3), 0 0 30px rgba(32,201,151,0.5); }
          }
          
          .contact-header .subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.4rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          
          .contact-header .description {
            color: rgba(255, 255, 255, 0.85);
            font-size: 1.1rem;
            max-width: 700px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }
          
          /* Redes sociales dinámicas */
          .social-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin: 3rem 0;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
          }
          
          .social-link {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-decoration: none;
            color: white;
            backdrop-filter: blur(15px);
            min-width: 130px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            animation: socialFloat 6s ease-in-out infinite;
          }
          
          .social-link:nth-child(2) { animation-delay: -1s; }
          .social-link:nth-child(3) { animation-delay: -2s; }
          .social-link:nth-child(4) { animation-delay: -3s; }
          .social-link:nth-child(5) { animation-delay: -4s; }
          
          @keyframes socialFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          .social-link:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-10px) scale(1.1);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            border-color: rgba(255, 255, 255, 0.4);
          }
          
          .social-link i {
            font-size: 2.2rem;
            margin-bottom: 0.8rem;
            transition: all 0.3s ease;
          }
          
          .social-link:hover i {
            transform: scale(1.3) rotate(10deg);
            filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
          }
          
          .social-name {
            font-weight: 700;
            font-size: 1rem;
            margin-bottom: 0.3rem;
          }
          
          .social-desc {
            font-size: 0.85rem;
            opacity: 0.9;
            text-align: center;
          }
          
          /* Formulario mejorado */
          .contact-form {
            max-width: 650px;
            margin: 0 auto;
            padding: 3rem;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 25px;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            position: relative;
            z-index: 2;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          [data-theme="dark"] .contact-form {
            background: rgba(30, 35, 45, 0.95);
            color: #f8f9fa;
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .form-group {
            margin-bottom: 2rem;
            position: relative;
          }
          
          .form-label {
            display: block;
            margin-bottom: 0.8rem;
            font-weight: 700;
            color: #333;
            font-size: 1rem;
          }
          
          [data-theme="dark"] .form-label {
            color: #f8f9fa;
          }
          
          .form-input, .form-textarea {
            width: 100%;
            padding: 1rem 1.2rem;
            border: 2px solid #e9ecef;
            border-radius: 15px;
            font-size: 1rem;
            transition: all 0.3s ease;
            background: #fff;
            color: #333;
            box-sizing: border-box;
          }
          
          .form-input:focus, .form-textarea:focus {
            outline: none;
            border-color: #198754;
            box-shadow: 0 0 0 4px rgba(25, 135, 84, 0.15);
            transform: translateY(-2px);
          }
          
          [data-theme="dark"] .form-input, [data-theme="dark"] .form-textarea {
            background: #495057;
            color: #f8f9fa;
            border-color: #6c757d;
          }
          
          [data-theme="dark"] .form-input:focus, [data-theme="dark"] .form-textarea:focus {
            border-color: #20c997;
            box-shadow: 0 0 0 4px rgba(32, 201, 151, 0.15);
          }
          
          .submit-btn {
            background: linear-gradient(135deg, #198754 0%, #20c997 100%);
            color: white;
            padding: 1.2rem 3rem;
            border: none;
            border-radius: 15px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .submit-btn:hover {
            background: linear-gradient(135deg, #157347 0%, #1aa179 100%);
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(25, 135, 84, 0.4);
          }
          
          .form-success {
            margin-top: 1.5rem;
            font-size: 0.95rem;
            color: #198754;
            text-align: center;
            font-weight: 600;
          }
          
          [data-theme="dark"] .form-success {
            color: #20c997;
          }
          
          @media (max-width: 768px) {
            .social-links {
              gap: 1rem;
            }
            
            .social-link {
              min-width: 110px;
              padding: 1rem;
            }
            
            .contact-form {
              margin: 0 1rem;
              padding: 2rem;
            }
          }
          </style>
          
          <div class="contact-header">
            <h2>📧 Contacto</h2>
            <div class="subtitle">🤝 ¡Conectemos y colaboremos!</div>
            <div class="description">🚀 ¿Tienes un proyecto interesante? 💡 ¿Quieres colaborar o simplemente charlar sobre tecnología? ✨ No dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y conexiones profesionales.</div>
          </div>
          
          <!-- Redes sociales -->
          <div class="social-links">
            <a href="https://github.com/abelguzman1" class="social-link" target="_blank" rel="noopener">
              <i class="fab fa-github" aria-hidden="true"></i>
              <div class="social-name">GitHub</div>
              <div class="social-desc">💻 Mis proyectos y código</div>
            </a>
            <a href="https://linkedin.com/in/abeleliasguzman" class="social-link" target="_blank" rel="noopener">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
              <div class="social-name">LinkedIn</div>
              <div class="social-desc">🤝 Red profesional</div>
            </a>
            <a href="https://twitter.com/abeldev" class="social-link" target="_blank" rel="noopener">
              <i class="fab fa-twitter" aria-hidden="true"></i>
              <div class="social-name">Twitter</div>
              <div class="social-desc">🐦 Pensamientos y actualizaciones</div>
            </a>
            <a href="mailto:abelg4446@gmail.com" class="social-link" target="_blank" rel="noopener">
              <i class="fas fa-envelope" aria-hidden="true"></i>
              <div class="social-name">Email</div>
              <div class="social-desc">📧 Contacto directo</div>
            </a>
            <a href="https://wa.me/18091234567" class="social-link" target="_blank" rel="noopener">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>
              <div class="social-name">WhatsApp</div>
              <div class="social-desc">📱 Chat rápido</div>
            </a>
          </div>
          
          <!-- Formulario de contacto -->
          <form action="https://formspree.io/f/xpwljqqa" method="POST" class="contact-form">
            <div class="form-group">
              <label for="nombre" class="form-label">👤 Nombre completo</label>
              <input type="text" id="nombre" name="nombre" required class="form-input" placeholder="Tu nombre completo">
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">📧 Correo electrónico</label>
              <input type="email" id="email" name="_replyto" required class="form-input" placeholder="tu@email.com">
            </div>
            
            <div class="form-group">
              <label for="asunto" class="form-label">📋 Asunto</label>
              <input type="text" id="asunto" name="_subject" required class="form-input" placeholder="¿De qué quieres hablar?">
            </div>
            
            <div class="form-group">
              <label for="mensaje" class="form-label">💬 Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="5" required class="form-textarea" placeholder="Cuéntame sobre tu proyecto o idea..."></textarea>
            </div>
            
            <input type="hidden" name="_next" value="https://abelguzman1.github.io/darkneko.github.io/#contact">
            <input type="hidden" name="_language" value="es">
            
            <button type="submit" class="submit-btn">🚀 Enviar Mensaje</button>
            
            <p class="form-success">✨ Formulario configurado y listo para recibir mensajes</p>
          </form>
        </div>
    design:
      columns: '1'
---
