---
title: 👩‍� Enseñanza y Tutorías Técnicas
summary: ¡Incorpora videos, podcasts, código, matemáticas LaTeX e incluso evalúa estudiantes!
date: 2023-10-24
math: true
authors:
  - admin
tags:
  - Educación
  - Programación
  - ITLA
  - Tutorías
image:
  caption: 'Incorpora contenido multimedia enriquecido como videos y matemáticas LaTeX'
---🏫 Enseñanza y Tutorías Técnicas
summary: ¡Incorpora videos, podcasts, código, matemáticas LaTeX e incluso evalúa estudiantes!
date: 2023-10-24
math: true
authors:
  - admin
tags:
  - Educación
  - Programación
  - ITLA
  - Tutorías
image:
  caption: 'Incorpora contenido multimedia enriquecido como videos y matemáticas LaTeX'
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

Hugo Blox Builder admite una extensión de Markdown para matemáticas $\LaTeX$. Habilita las matemáticas configurando la opción `math: true` en el front matter de tu página, o habilita las matemáticas para todo tu sitio activando math en tu archivo `config/_default/params.yaml`:

```yaml
features:
  math:
    enable: true
```

Para renderizar matemáticas _en línea_ o _en bloque_, envuelve tu matemática LaTeX con `$...$` o `$$...$$`, respectivamente.

Example **math block**:

```latex
$$
\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}
$$
```

renders as

$$\gamma_{n} = \frac{ \left | \left (\mathbf x_{n} - \mathbf x_{n-1} \right )^T \left [\nabla F (\mathbf x_{n}) - \nabla F (\mathbf x_{n-1}) \right ] \right |}{\left \|\nabla F(\mathbf{x}_{n}) - \nabla F(\mathbf{x}_{n-1}) \right \|^2}$$

Example **inline math** `$\nabla F(\mathbf{x}_{n})$` renders as $\nabla F(\mathbf{x}_{n})$.

Example **multi-line math** using the math linebreak (`\\`):

```latex
$$f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{if }k=1, \\
1-p_{0}^{*} & \text{if }k=0.\end{cases}$$
```

renders as

$$
f(k;p_{0}^{*}) = \begin{cases}p_{0}^{*} & \text{if }k=1, \\
1-p_{0}^{*} & \text{if }k=0.\end{cases}
$$

## Code

Hugo Blox Builder utilises Hugo's Markdown extension for highlighting code syntax. The code theme can be selected in the `config/_default/params.yaml` file.


    ```python
    import pandas as pd
    data = pd.read_csv("data.csv")
    data.head()
    ```

renders as

```python
import pandas as pd
data = pd.read_csv("data.csv")
data.head()
```

## Inline Images

```go
{{</* icon name="python" */>}} Python
```

renders as

{{< icon name="python" >}} Python

## Did you find this page helpful? Consider sharing it 🙌
