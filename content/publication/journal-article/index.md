---
title: "Automatización de Infraestructura con Ansible y Docker: Estudio de Caso con 5 Servidores Ubuntu"
authors:
- admin
author_notes:
- "Práctica 8 - Electiva II Automatización de Infraestructura (ITLA)"
date: "2025-07-17T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-17T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article-journal"]

# Publication name and optional abbreviated publication name.
publication: "*Documentación de Prácticas DevOps ITLA, 2025*(1)"
publication_short: ""

abstract: Este documento presenta la implementación exitosa de un entorno de automatización completo utilizando Ansible y Docker para gestionar 5 servidores Ubuntu simultáneamente. El proyecto demuestra la aplicación práctica de Infrastructure as Code (IaC) mediante playbooks YAML, inventarios dinámicos y contenedorización con Docker Compose. Se documentan todas las fases del proyecto desde la construcción de imágenes Docker hasta la ejecución de tareas automatizadas que incluyen gestión de paquetes (cowsay, htop), creación de usuarios (itla), manejo de sistema de archivos (/app/hola.txt), y configuración masiva de servidores. El entorno se ejecuta 100% desde Ubuntu WSL, proporcionando una experiencia de desarrollo nativa y escalable que simula infraestructura real aplicando las mejores prácticas DevOps.

# Summary. An optional shortened abstract.
summary: Implementación práctica de automatización DevOps con Ansible y Docker para gestión de múltiples servidores Ubuntu, demonstrando Infrastructure as Code y mejores prácticas de automatización.

tags:
- Ansible
- Docker
- DevOps
- Infrastructure as Code
- Ubuntu
- Automatización
featured: false

# links:
# - name: ""
#   url: ""
url_pdf: http://arxiv.org/pdf/1512.04133v1
url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

{{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
