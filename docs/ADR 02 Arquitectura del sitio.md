# ADR 02: Arquitectura del nuevo sitio de Daniela Silva

**Estado:** Aprobado en principio por Daniela el 19 de septiembre de 2026, con la condición de que todo sea gratuito
**Fecha:** septiembre de 2026
**Decisora:** Daniela Silva
**Relacionado:** ADR 01 Entorno de desarrollo (compilar y previsualizar en la nube), DESIGN.md (diseño y plano)

## Contexto
Daniela reconstruye su portafolio con una interfaz nueva, servicios unificados y una promesa por delante. Requisitos:

1. Partir de su repositorio actual en GitHub (Portafolio Daniela) y de su sitio publicado en Vercel.
2. **Todo editable por ella, tipo plantilla, sin tocar código:** subir fotos y videos, cambiar textos, mover bloques, ajustar colores, precios, pie de página, logo y menú.
3. Sitio completo en español e inglés.
4. Nada se instala ni se compila en su computador, que tiene 3,8 GB de RAM. Todo se construye y prueba en la nube. Los archivos locales se guardan en la unidad D.
5. Rendimiento y SEO de nivel alto, porque es un sitio de ventas.
6. Conversión por WhatsApp y formulario. No se inventan datos.
7. Costo cero: todo debe funcionar en planes gratuitos, y esos planes deben permitir uso comercial, porque el sitio ofrece servicios pagados.
8. No se desarrolla nada sin su aprobación previa del plano.

Fuerzas en juego: una sola persona edita, el contenido cambia seguido (precios y servicios), y el diseño debe seguir limpio aunque se edite todo.

## Decisión
**Next.js en un hosting gratuito que permita uso comercial (Netlify, plan gratuito), con contenido, tema y páginas en Sanity mediante un constructor de páginas por bloques, y español e inglés por rutas.**

**Cambio de hosting.** La versión anterior de este documento decía Vercel. Según las guías de uso justo de Vercel, el plan Hobby es solo para uso personal no comercial, y un sitio que promociona servicios pagados cuenta como comercial, aunque no cobre en línea. Para uso comercial Vercel exige el plan Pro, de pago. Netlify permite uso comercial en su plan gratuito, dentro de límites (100 GB de ancho de banda y 300 minutos de compilación al mes, y el sitio se pausa si se superan). Cloudflare Pages es otra opción gratuita, pero Next.js tiene limitaciones ahí. Si Daniela prefiere Vercel, necesita el plan Pro.

1. **Frontend.** Next.js (App Router) desplegado desde el repositorio de GitHub, Tailwind con los colores como variables, y Motion solo donde el plano lo pide. Si el repositorio actual usa otra base, se revisa primero cuál conviene reutilizar.
2. **Edición.** Sanity Studio dentro del sitio, en la ruta /studio, protegido con inicio de sesión, con vista previa en vivo y edición sobre la propia página.
3. **Constructor de páginas por bloques.** Cada página es una lista de bloques que Daniela arrastra para reordenar, oculta, duplica o elimina. Bloques: Promesa, Confianza, Dolores, Soluciones, Pasos, Demo, Proyectos, Planes, Testimonios, Sobre mí, Banda de acción, Preguntas, Texto libre, Galería o video y Contacto.
4. **Tema editable.** Los colores del diseño (verde oliva, arena y nude) por rol, las animaciones que se pueden apagar o acelerar, el redondeo, la familia de letra (de una lista curada) y el tamaño base se guardan como ajustes y se aplican al sitio como variables CSS desde el servidor. El logo tiene versión para fondo oscuro y para fondo claro. El menú y el pie son documentos propios, por idioma.
5. **Barreras de calidad.** Aviso automático si un par de colores baja de 4,5 a 1 de contraste, colores por rol y no por lugar, botón para restaurar el diseño base, historial de versiones y vista previa completa antes de publicar.
6. **Idiomas.** Rutas /es y /en, textos de interfaz en archivos, contenido de Sanity con un campo por idioma y etiquetas hreflang.
7. **Medios.** Imágenes por la red de Sanity con next image (AVIF o WebP). Videos largos por YouTube o Vimeo, que son gratuitos, y no por el hosting, para no gastar el ancho de banda. Bucles cortos en MP4 de máximo 3 MB, silenciados y con carga diferida.
8. **Formulario y contacto.** Envío de correo por un servicio con capa gratuita (Resend o Formspree, hay que verificar sus límites), con campo trampa y límite de envíos. WhatsApp con mensaje prellenado y número tomado de Ajustes.
9. **Publicación.** Al publicar en Sanity, un webhook avisa al sitio para que actualice las páginas afectadas. Si el hosting no permite actualizar páginas sueltas, se reconstruye el sitio con un aviso de publicación, lo que tarda uno o dos minutos.
10. **Despliegue.** GitHub a Netlify, con vista previa por rama y producción desde main. Revisión de tipos y pruebas en GitHub Actions, nunca en el computador de Daniela. Se usa un proyecto nuevo, sin tocar los antiguos de Vercel.
11. **SEO y rendimiento.** Metadatos por idioma, sitemap, robots, datos estructurados, imágenes para compartir y metas de LCP menor a 2,5 s y CLS menor a 0,1.
12. **Analítica.** Google Analytics 4 o Cloudflare Web Analytics, ambos gratuitos, con eventos para el clic en WhatsApp, el envío del formulario y el clic en un plan.
13. **Seguridad.** Ningún secreto en el navegador. Los tokens de escritura viven solo en variables de entorno de Vercel. El estudio exige inicio de sesión y las rutas de servidor limitan las solicitudes.

### Modelo de datos editable
| Documento | Campos principales |
|---|---|
| Ajustes del sitio | Nombre, WhatsApp, correo, redes, destino del formulario, SEO por defecto |
| Tema | Colores por rol, animaciones activables y su velocidad, redondeo, familia de letra, tamaño base |
| Logo | Versión oscura, versión clara, texto alternativo |
| Menú | Enlaces, submenús y botón de acción, por idioma |
| Pie de página | Columnas, enlaces, redes, texto legal, por idioma |
| Página | Título, SEO, lista ordenable de bloques, por idioma |
| Servicio | Nombre, gancho, problema, beneficios, niveles con precio, imágenes, video, orden, visibilidad |
| Plan | Nombre, precio, lo que incluye, destacado |
| Proyecto | Problema, solución, resultado real, tecnologías, enlace, imágenes |
| Testimonio | Cita, nombre, país, foto opcional, video opcional |
| Pregunta frecuente | Pregunta, respuesta, servicio asociado |

### Mapa de rutas
| Ruta | Contenido |
|---|---|
| /es y /en | Inicio |
| /es/servicios | Catálogo con precios |
| /es/servicios/[servicio] | Página de cada servicio |
| /es/proyectos y /es/proyectos/[caso] | Casos con problema, solución y resultado |
| /es/recursos | Guías y Auditoría de Ventas |
| /es/contacto | WhatsApp y formulario |
| /studio | Panel de edición privado |

## Opciones consideradas
| Dimensión | A. Sanity con bloques (recomendada) | B. Payload dentro de Next.js con Supabase | C. Editor visual Builder.io o Plasmic | D. Panel propio en Supabase | E. Archivos en GitHub con editor web |
|---|---|---|---|---|---|
| Complejidad | Media | Alta | Media | Muy alta | Baja |
| Costo | Plan gratuito para empezar. Los límites varían según la fuente, hay que verificarlos en la página oficial | Software gratuito. Se paga base de datos y almacenamiento, con capa gratuita en Supabase | Plan gratuito limitado. Verificar | Bajo, pero cuesta mucho desarrollo | Cero |
| Edición estilo plantilla | Muy buena: arrastrar bloques, vista previa en vivo, tema, menú y pie | Muy buena: constructor de diseño y vista previa | La más visual: arrastrar y soltar en la propia página | La que se construya | Limitada, sin mover bloques |
| Español e inglés | Por campo | Nativo | Variable según el plan | A construir | A mano |
| Fotos y videos | Subida directa. Videos pesados mejor por YouTube o Vimeo | Almacenamiento aparte | Incluido | A construir | Mala para videos |
| Riesgo de romper el diseño | Bajo, con las barreras | Bajo | Alto: es fácil desordenar un diseño limpio y las animaciones a medida cuestan | Depende | Bajo |
| Dependencia del proveedor | Media, los datos se exportan | Baja, es código abierto, pero exige más mantenimiento | Alta | Baja | Baja |

### ¿Hace falta un panel de edición?
Es la pregunta de fondo. Un panel de edición (Sanity en la recomendación) existe para una sola cosa: que Daniela cambie el sitio sin tocar código.

* **Con panel:** cambiar un precio, una foto, un texto, el orden de las secciones o un color se hace en el panel y se publica en segundos.
* **Sin panel (opción F):** todo el contenido vive en el código del repositorio. Cada cambio se hace editando archivos y volviendo a publicar, es decir, se le pide a Claude o a un desarrollador. Es más simple, no cuesta nada, no agrega ninguna plataforma y es la más rápida de construir. Pero contradice el requisito de que Daniela edite todo ella misma.

Como el requisito 2 dice que Daniela quiere editarlo todo tipo plantilla, el panel es necesario. Si en cambio prefiere pedir los cambios, la opción F es válida y ahorra una plataforma y su curva de aprendizaje. Queda por confirmar cómo se edita hoy su sitio actual, porque aún no se revisó el repositorio.

## Análisis de compromisos
* **A frente a C.** C ofrece el arrastrar y soltar más libre, pero con ese poder el diseño limpio se puede desordenar y las animaciones a medida se complican. A da una sensación de plantilla completa (bloques, tema, menú, pie, logo) con barreras que protegen el diseño.
* **A frente a B.** B es la mejor alternativa si Daniela quiere todo en su propia infraestructura y ya usa Supabase. Cuesta más desarrollo y más mantenimiento.
* **D y E** no cumplen bien el pedido de editar todo como una plantilla.

La recomendación es A. La decisión de fondo para Daniela es cuánto control absoluto quiere frente a cuánta protección del diseño.

## Consecuencias
* **Más fácil:** cambiar precios, textos, fotos, videos, colores, menú y pie sin código, publicar en segundos y volver a versiones anteriores.
* **Más difícil:** cada bloque nuevo o fuente nueva pide desarrollo. El editor depende de un proveedor. Tener dos idiomas duplica el trabajo de edición.
* **A revisar más adelante:** límites del plan gratuito, peso de los videos y qué partes del repositorio actual se pueden reutilizar.

## Acciones pendientes de aprobación
1. Aprobar el diseño y esta arquitectura.
2. Autorizar el conector de GitHub o indicar cómo leer el repositorio, y revisar su base técnica.
3. Crear la cuenta y el proyecto de Sanity (lo hace Daniela, con su correo).
4. Definir con Daniela los esquemas de bloques y de tema.
5. Crear el sitio en Netlify desde el repositorio nuevo y cargar las variables de entorno (Daniela las carga directamente, nunca en el chat).
6. Construir en una rama con vista previa en Vercel, sin compilar en el computador de Daniela.
7. Revisar seguridad, rendimiento, accesibilidad, SEO y animaciones antes de publicar.
8. Grabar una capacitación corta en video para que Daniela edite sola.
