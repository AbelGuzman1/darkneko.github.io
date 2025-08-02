---
title: Aprende Python
summary: ¡Domina Python fácilmente con conceptos fundamentales para desarrollo de software!
date: 2023-10-24
type: docs
math: false
tags:
  - Python
  - Programación
  - ITLA
image:
  caption: 'Incorpora contenido multimedia enriquecido como videos y matemáticas LaTeX'
---

Como estudiante de **Desarrollo de Software en ITLA**, Python se ha convertido en una de mis herramientas favoritas para scripting, automatización y análisis de datos. [Hugo Blox Builder](https://hugoblox.com) está diseñado para brindar a los creadores de contenido técnico una experiencia perfecta.

**¡Incorpora videos, podcasts, código, matemáticas LaTeX, e incluso evalúa estudiantes!**

En esta página, encontrarás algunos ejemplos de los tipos de contenido técnico que se pueden renderizar con Hugo Blox, enfocados en el aprendizaje de Python aplicado al desarrollo de software.

## Videos Educativos

Enseña tu curso compartiendo videos con tus estudiantes. Elige uno de los siguientes enfoques:

{{< youtube D2vj0WcvH5c >}}

**Youtube**:

    {{</* youtube w7Ft2ymGmfc */>}}

**Bilibili**:

    {{</* bilibili id="BV1WV4y1r7DF" */>}}

**Archivo de Video**

Los videos pueden agregarse a una página colocándolos en tu biblioteca de medios `assets/media/` o en [la carpeta de tu página](https://gohugo.io/content-management/page-bundles/), y luego insertándolos con el shortcode _video_:

    {{</* video src="my_video.mp4" controls="yes" */>}}

## Podcast

Puedes agregar un podcast o música a una página colocando el archivo MP3 en la carpeta de la página o en la carpeta de la biblioteca de medios y luego insertando el audio en tu página con el shortcode _audio_:

    {{</* audio src="ambient-piano.mp3" */>}}

Pruébalo:

{{< audio src="ambient-piano.mp3" >}}

## Evalúa Estudiantes

Proporciona una autoevaluación simple pero divertida revelando las soluciones a los desafíos con el shortcode `spoiler`:

```markdown
{{</* spoiler text="👉 Haz clic para ver la solución" */>}}
¡Me encontraste!
{{</* /spoiler */>}}
```

se renderiza como

{{< spoiler text="👉 Haz clic para ver la solución" >}} ¡Me encontraste! 🎉 {{< /spoiler >}}

## Matemáticas

Hugo Blox Builder admite una extensión de Markdown para matemáticas $\LaTeX$. Puedes habilitar esta función activando la opción `math` en tu archivo `config/_default/params.yaml`.

Para renderizar matemáticas _en línea_ o _en bloque_, envuelve tu matemática LaTeX con `{{</* math */>}}$...${{</* /math */>}}` o `{{</* math */>}}$$...$${{</* /math */>}}`, respectivamente.

{{% callout note %}}
Envolvemos las matemáticas LaTeX en el shortcode _math_ de Hugo Blox para evitar que Hugo renderice nuestras matemáticas como Markdown.
{{% /callout %}}

Ejemplo de **bloque matemático**:

```latex
{{</* math */>}}
$$
\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}
$$
{{</* /math */>}}
```

se renderiza como

{{< math >}}
$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$
{{< /math >}}

Ejemplo de **matemática en línea** `{{</* math */>}}$\nabla F(\mathbf{x}_{n})${{</* /math */>}}` se renderiza como {{< math >}}$\nabla F(\mathbf{x}_{n})${{< /math >}}.

Ejemplo de **matemática multilínea** usando el salto de línea matemático (`\\`):

```latex
{{</* math */>}}
$$f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{si }k=1, \\
1-p_{0}^{*} & \text{si }k=0.\end{cases}$$
{{</* /math */>}}
```

se renderiza como

{{< math >}}

$$
f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{si }k=1, \\
1-p_{0}^{*} & \text{si }k=0.\end{cases}
$$

{{< /math >}}

## Código

Hugo Blox Builder utiliza la extensión Markdown de Hugo para resaltar la sintaxis del código. El tema del código puede seleccionarse en el archivo `config/_default/params.yaml`.


    ```python
    import pandas as pd
    data = pd.read_csv("data.csv")
    data.head()
    ```

se renderiza como

```python
import pandas as pd
data = pd.read_csv("data.csv")
data.head()
```

## Imágenes en Línea

```go
{{</* icon name="python" */>}} Python
```

se renderiza como

{{< icon name="python" >}} Python

## ¿Te resultó útil esta página? ¡Considera compartirla! 🙌
