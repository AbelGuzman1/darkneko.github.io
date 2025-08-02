---
title: 👩‍🏫 Enseñanza y Tutorías Técnicas
summary: ¡Incorpora videos, podcasts, código, matemáticas LaTeX e incluso evalúa estudiantes!
date: 2023-10-24
lastmod: 2023-10-24
draft: false
featured: false
math: true
authors:
  - admin
tags:
  - Educación
  - Programación
  - ITLA
  - Tutorías
categories:
  - Education
  - Blog
image:
  caption: 'Incorpora contenido multimedia enriquecido como videos y matemáticas LaTeX'
  focal_point: ''
  preview_only: false
---

Como estudiante de **Desarrollo de Software en ITLA**, he descubierto la importancia de compartir conocimiento con mis compañeros. [Hugo Blox Builder](https://hugoblox.com) está diseñado para brindar a los creadores de contenido técnico una experiencia perfecta.

**¡Incorpora videos, podcasts, código, matemáticas LaTeX, e incluso evalúa estudiantes!**

En esta página, encontrarás algunos ejemplos de los tipos de contenido técnico que puedo crear para enseñar conceptos de programación y desarrollo de software.

## Videos Educativos

Enseño conceptos de programación compartiendo videos con mis compañeros estudiantes. Elijo entre uno de los siguientes enfoques:

**Youtube**:

    {{</* youtube D2vj0WcvH5c */>}}

{{< youtube D2vj0WcvH5c >}}

**Bilibili**:

    {{</* bilibili BV1WV4y1r7DF */>}}

{{< bilibili BV1WV4y1r7DF >}}

**Video Local**:

Videos pueden ser subidos directamente a la carpeta `assets/media/` y embebidos con:

    {{</* video src="my_video.mp4" controls="yes" */>}}

{{< video src="ambient-piano.mp3" controls="yes" >}}

## Podcasts

Los podcasts se embeben de manera similar a los videos.

A veces me gusta compartir audios de conceptos técnicos con mis compañeros:

    {{</* audio src="ambient-piano.mp3" */>}}

{{< audio src="ambient-piano.mp3" >}}

Prueba utilizando el botón de play para reproducir el audio.

## Evaluaciones Interactivas

Con Hugo Blox, es fácil crear evaluaciones para evaluar a los estudiantes. Un ejemplo de evaluación de verdadero/falso:

{{< spoiler text="🤔 ¿Es JavaScript un lenguaje de programación interpretado?" >}}
**¡Verdadero!** JavaScript es un lenguaje interpretado que se ejecuta directamente en el navegador web.
{{< /spoiler >}}

{{< spoiler text="¿Python requiere compilación antes de ejecutarse?" >}}
**¡Falso!** Python es un lenguaje interpretado. Aunque puede generar bytecode, no requiere compilación explícita del usuario.
{{< /spoiler >}}

{{< spoiler text="¿HTML es un lenguaje de programación?" >}}
**¡Falso!** HTML es un lenguaje de marcado, no de programación. Se usa para estructurar contenido web.
{{< /spoiler >}}

## Fórmulas matemáticas

Las fórmulas matemáticas pueden ser habilitadas globalmente para un sitio configurando `math: true` en `config/_default/params.yaml`, o puede ser habilitada por página configurando `math: true` en el front matter de la página.

Para renderizar fórmulas en línea, envuelve la fórmula con `$`...$`.

Para mostrar ecuaciones matemáticas, envuelve la fórmula con `$$`...`$$`.

Por ejemplo, aquí está una integral usada comúnmente en algoritmos de aprendizaje automático:

$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf x_{n}) - \nabla F(\mathbf x_{n-1}) \right \|^2}$$

## Resaltado de Código

Aplico un resaltado de sintaxis usando la biblioteca Chroma de Hugo. Los [códigos cortos](https://hugoblox.com/docs/content/writing-markdown-latex/#highlight) de Hugo help con la numeración de líneas, resaltado de líneas, y codificación.

Por ejemplo, puedo resaltar Python:

```python
import pandas as pd
data = pd.read_csv("data.csv")
data.head()
```

O resaltar JavaScript:

```javascript
const nombre = "ITLA";
console.log(`Hola desde ${nombre}!`);
```

## ¿Algo más?

¿Tienes alguna sugerencia de funcionalidad que debería agregar? [Hágamelo saber!](https://github.com/AbelGuzman1)

También puedes probar HugoBlox con diferentes diseños de página con el [**constructor de páginas en línea**](https://hugoblox.com/hugo-themes/).
