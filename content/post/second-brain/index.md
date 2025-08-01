---
title: 🧠 Construye tu Segundo Cerebro Digital
summary: Crea una base de conocimiento personal y comparte tu aprendizaje como estudiante de desarrollo de software en ITLA.
date: 2023-10-26
authors:
  - admin
tags:
  - Gestión del Conocimiento
  - Aprendizaje Continuo
  - ITLA
  - Desarrollo Personal
image:
  caption: 'Crédito de imagen: [**Unsplash**](https://unsplash.com)'
---

Como estudiante de **Desarrollo de Software en ITLA**, crear una base de conocimiento personal se ha vuelto esencial para mi crecimiento académico y profesional. Este "segundo cerebro" me ayuda a organizar, conectar y compartir todo lo que aprendo en mi formación tecnológica.

## ¿Por Qué Necesitas un Segundo Cerebro?

En el campo de la tecnología, el conocimiento evoluciona constantemente. Hugo Blox me proporciona una de las capacidades de toma de notas más flexibles disponibles, permitiéndome crear una poderosa base de conocimiento sobre una carpeta local de archivos Markdown de texto plano.

Lo uso como mi segundo cerebro, compartiendo públicamente mi conocimiento con compañeros de ITLA a través de mi sitio web, o manteniendo repositorios privados en GitHub para estudio personal.

## Mapas Mentales para Conceptos Técnicos

Hugo Blox es compatible con una extensión de Markdown para mapas mentales, perfecta para visualizar conceptos complejos de programación y arquitectura de software.

Con este formato abierto, puedo incluso editar mis mapas mentales en otras herramientas populares como Obsidian.

Simplemente inserto un bloque de código Markdown etiquetado como `markmap` y opcionalmente establezco la altura del mapa mental como se muestra en el ejemplo:

Mindmaps can be created by simply writing the items as a Markdown list within the `markmap` code block, indenting each item to create as many sub-levels as you need:

<div class="highlight">
<pre class="chroma">
<code>
```markmap {height="200px"}
- Hugo Modules
  - Hugo Blox
  - blox-plugins-netlify
  - blox-plugins-netlify-cms
  - blox-plugins-reveal
```
</code>
</pre>
</div>

renders as

```markmap {height="200px"}
- Hugo Modules
  - Hugo Blox
  - blox-plugins-netlify
  - blox-plugins-netlify-cms
  - blox-plugins-reveal
```

Anh here's a more advanced mindmap with formatting, code blocks, and math:

<div class="highlight">
<pre class="chroma">
<code>
```markmap
- Mindmaps
  - Links
    - [Hugo Blox Docs](https://docs.hugoblox.com/)
    - [Discord Community](https://discord.gg/z8wNYzb)
    - [GitHub](https://github.com/HugoBlox/hugo-blox-builder)
  - Features
    - Markdown formatting
    - **inline** ~~text~~ *styles*
    - multiline
      text
    - `inline code`
    -
      ```js
      console.log('hello');
      console.log('code block');
      ```
    - Math: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
```
</code>
</pre>
</div>

renders as

```markmap
- Mindmaps
  - Links
    - [Hugo Blox Docs](https://docs.hugoblox.com/)
    - [Discord Community](https://discord.gg/z8wNYzb)
    - [GitHub](https://github.com/HugoBlox/hugo-blox-builder)
  - Features
    - Markdown formatting
    - **inline** ~~text~~ *styles*
    - multiline
      text
    - `inline code`
    -
      ```js
      console.log('hello');
      console.log('code block');
      ```
    - Math: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
```

## Highlighting

<mark>Highlight</mark> important text with `mark`:

```html
<mark>Highlighted text</mark>
```

## Callouts

Use [callouts](https://docs.hugoblox.com/reference/markdown/#callouts) (aka _asides_, _hints_, or _alerts_) to draw attention to notes, tips, and warnings.

By wrapping a paragraph in `{{%/* callout note */%}} ... {{%/* /callout */%}}`, it will render as an aside.

```markdown
{{%/* callout note */%}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{%/* /callout */%}}
```

renders as

{{% callout note %}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{% /callout %}}

Or use the `warning` callout type so your readers don't miss critical details:

{{% callout warning %}}
A Markdown aside is useful for displaying notices, hints, or definitions to your readers.
{{% /callout %}}

## Did you find this page helpful? Consider sharing it 🙌
