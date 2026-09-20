# Daniela Silva Estrategia Digital: referencia de estilo y plano
> Una promesa, cero ruido. Interfaz oscura, en verde oliva premium, con arena y nude como acentos. Toda la atención va a la promesa.

**Estado:** plano y paleta aprobados por Daniela el 19 de septiembre de 2026. No se desarrolla nada, en GitHub ni en ningún otro lugar, hasta que ella dé la orden de empezar.

**Cómo se hizo este diseño.** Se combinaron: el DESIGN.md de AgentQL que Daniela compartió (forma de documentar un sistema visual, fondo oscuro en capas, botones en píldora), el SKILL.md de ui-ux-pro-max (flujo de sistema de diseño y lista de verificación), las habilidades del WebKit (frontend design, animate, emil design eng) y la estructura de finapartner.com. La paleta es la de Daniela: verde oliva oscuro premium, beige arena premium y nude. No lleva dorado. El buscador de ui-ux-pro-max propuso una paleta azul y un estilo cargado de animación; se descartó por chocar con la marca.

| Se toma | Se deja |
|---|---|
| Fondo oscuro en capas y bordes finos en lugar de sombras | Aurora violeta y rosa, y cualquier paleta azul |
| Botón principal en píldora | Texto con degradado y botones saturados |
| Titulares con espaciado cerrado y una sola familia de letra | Inter (la prohíbe el WebKit), tipografía de código, ilustraciones de código |
| Contenedor de 1200 px y ritmo generoso | Sombras pesadas |
| Etiqueta pequeña sobre cada título | Dorado, marfil y crema |

## 1. Idea de diseño
**Promesa primero.** Lo que más llama la atención es la frase clave del titular, escrita en arena. Todo lo demás es silencioso: capas de verde oliva oscuro, texto casi blanco, líneas finas y mucho espacio.

Reglas que no se rompen:
* La paleta es solo la de Daniela: verde oliva oscuro, arena y nude. Ningún dorado.
* Cero degradados en texto, cero sombras decorativas. El resplandor estático y suave de oliva detrás del titular, como el fondo de design.md, existe como opción pero viene apagado por defecto (decisión de Daniela). Se enciende desde el panel.
* Cada pantalla tiene una sola acción principal.
* Motivo de marca: **la línea que crece.** Una línea fina de arena se dibuja bajo cada etiqueta de sección al entrar en pantalla. Habla de crecimiento y es la firma discreta del sitio.

## 2. Colores
Fondo oscuro en capas, como design.md, pero en verde oliva. Los neutros llevan un matiz oliva mínimo. Ningún negro ni blanco puros.

| Token | Valor | Uso | Contraste sobre la base |
|---|---|---|---|
| base | #0B0F09 | Superficie 0: fondo de la página | Referencia |
| canvas | #10160D | Superficie 1: secciones alternas | Referencia |
| raised | #172012 | Superficie 2: filas, paneles y pie | Referencia |
| olive panel | #253320 | Superficie 3: panel destacado en verde oliva | Referencia |
| line | #26321F | Borde fino de 1 px | Estructura |
| line strong | #3A4A2E | Borde de botones fantasma y campos | Estructura |
| text | #F3F4EE | Texto principal | Más de 15 a 1 |
| text soft | #B2B6A8 | Texto secundario | Cerca de 9 a 1 |
| sand | #CDBA9C | Acento principal: frase clave, botón principal, etiquetas, enlaces y foco | Cerca de 10 a 1 |
| nude | #D4B5A0 | Acento suave: pastillas, marcas de cita, plan destacado y resaltes | Cerca de 10 a 1 |
| olive | #9AAB78 | Apoyo: iconos de verificación y estados de éxito | Cerca de 8 a 1 |

El mínimo aceptable es 4,5 a 1. Los contrastes se calcularon a mano y se verifican otra vez al construir. La arena y el nude nunca se usan como relleno grande, salvo el botón principal en arena con texto oscuro.

## 3. Tipografía
Una sola familia: **Figtree**, con pesos 400, 500 y 600. Menos fuentes, más limpio y más rápido. Alternativa que sugiere el buscador: Outfit para titulares con Work Sans para el cuerpo.

| Rol | Tamaño | Peso | Interlineado | Espaciado |
|---|---|---|---|---|
| Titular del inicio | Fluido, de 44 a 72 px | 600 | 1,02 | Menos 0,02 em |
| Título de sección | Fluido, de 32 a 48 px | 600 | 1,1 | Menos 0,02 em |
| Título de bloque | 28 px | 500 | 1,25 | Menos 0,015 em |
| Subtítulo | 20 px | 500 | 1,4 | Menos 0,01 em |
| Cuerpo | 17 px | 400 | 1,6 | Normal |
| Etiqueta de sección | 12 a 13 px, mayúsculas | 500 | 1,3 | Más 0,06 em |
| Precios | 40 a 48 px, cifras tabulares | 600 | 1 | Menos 0,02 em |

La firma cursiva de tu logo aparece solo dentro del logo. La fuente se carga con next font, con swap y sin enlaces externos.

## 4. Espaciado y forma
* Unidad base de 4 px. Contenedor máximo de 1200 px.
* Separación entre secciones: 96 px en escritorio y 64 px en móvil. Dentro de una sección, 24 a 40 px.
* Radios: tarjetas y paneles 12 px, campos 8 px, botones y etiquetas píldora 9999 px.
* Sin sombras. La profundidad sale de subir un escalón de superficie y de una línea de 1 px.

## 5. Componentes

**Botón principal.** Fondo sand, texto base, píldora, relleno 12 px por 24 px, peso 500. Al pasar el cursor, el fondo cambia suavemente a nude. Al presionar, escala 0,97. Es la única acción de mayor peso en cada pantalla.

**Botón fantasma.** Transparente, borde line strong de 1 px, texto text, misma forma. Al pasar el cursor, el borde pasa a sand.

**Botón de WhatsApp.** Píldora principal con el ícono de chat y el texto "Hablemos". En móvil, barra fija inferior de 56 px con el mensaje ya escrito según el servicio y el nivel.

**Etiqueta de sección.** Mayúsculas pequeñas en sand, con la línea que crece debajo. Ejemplo: "SOLUCIONES".

**Pastilla de confianza.** Píldora con borde line, un punto olive y el texto "Clientes en Colombia, Venezuela, Perú, México y EEUU". Solo datos reales.

**Fila de dolor.** No es una tarjeta: es una fila de ancho completo con la frase entre comillas (las comillas en nude) en título de bloque, una flecha a la derecha y una línea inferior de 1 px. Al pasar el cursor sube a la superficie raised. Cada fila lleva a su solución.

**Pestaña de solución.** Lista vertical a la izquierda. La pestaña activa lleva texto text, una barra sand de 2 px a la izquierda y fondo raised. Las inactivas usan text soft.

**Panel de solución.** A la derecha de las pestañas: promesa como título de bloque, dos líneas de apoyo, tres o cuatro beneficios con un check olive, el precio de entrada en text soft ("Desde $99"), el botón principal y un enlace "Ver el servicio completo".

**Marco de producto.** Superficie raised, borde line, radio 12 px, con una barra superior mínima de tres puntos en line strong. Contiene la animación temática del servicio o capturas reales. Sin sombra.

**Carrusel de imágenes.** Dentro del marco, se arrastra con el dedo o el ratón, se ajusta al borde, tiene flechas y puntos accesibles por teclado. Cada imagen puede llevar un enlace a su página.

**Fila de nivel y precio.** Tres columnas separadas por líneas de 1 px, no tres tarjetas. El nivel recomendado usa el fondo olive panel.

**Plan.** Igual que el nivel, con lista de lo que incluye y el precio en 40 a 48 px. Es discreto: aparece después de la promesa. El plan destacado va sobre olive panel con una pastilla nude.

**Testimonio.** Cita grande en 20 a 28 px, con la comilla de apertura en nude. Nombre y país en text soft. Sin fotos falsas ni estrellas decorativas.

**Acordeón.** Filas de una línea con un signo más que gira. Abre con la técnica de filas de cuadrícula.

**Campo de formulario.** Etiqueta visible arriba, campo con radio de 8 px y borde line strong. En foco, borde sand de 2 px. El error aparece bajo el campo.

**Menú grande de escritorio.** Se despliega desde el botón "Soluciones". Dos columnas: a la izquierda las categorías, a la derecha los servicios con una línea de promesa cada uno.

**Panel de hamburguesa (móvil y tablet).** Entra desde la derecha con la curva de cajón. Contiene Soluciones, Planes, Proyectos, Resultados, Recursos, el selector de idioma y el botón de WhatsApp.

**Pie de página.** Superficie raised. Columnas: Soluciones, Recursos, Empresa y Contacto. Instagram @danieladigital3.0, selector de idioma y aviso legal.

## 6. Plano de pantallas

### 6.1 Inicio, de arriba abajo
1. **Encabezado.** Logo a la izquierda. Al centro: Soluciones, Planes, Proyectos, Resultados, Recursos. A la derecha: ES y EN, y el botón "Hablemos". Transparente arriba; al bajar, fondo base al 90 por ciento y una línea fina. Sin desenfoque.
2. **Promesa.** Alineada a la izquierda, ocupa siete de doce columnas. Etiqueta, titular, apoyo, dos botones y la pastilla de confianza. Sin imagen en la primera pantalla: toda la atención va al texto.
3. **Marco de producto.** Justo debajo, ancho completo, con la primera prueba visual del producto. Entra al hacer scroll.
4. **Si algo de esto es tu día a día.** Etiqueta, título y de cinco a siete filas de dolor. Cada fila lleva a su solución.
5. **Soluciones.** Siete pestañas a la izquierda y el panel a la derecha, con la animación temática de cada servicio. Es el corazón de la página. Las pestañas son: Vender, Tienda, Amazon, Controlar, Crear, Marca y contenido, y Acompañamiento.
6. **Cómo trabajamos.** Tres pasos en una fila, con número grande y una línea que los une: cuéntanos tu idea, la construimos, te la entregamos instalada.
7. **Pruébalo tú mismo.** Una sola demo interactiva grande dentro de un marco: el cotizador instantáneo, con datos de ejemplo marcados como tal.
8. **Proyectos.** Tres casos destacados, uno debajo del otro, en composición alternada: imagen a un lado, texto al otro. Enlace a todos.
9. **Elige por dónde empezar.** Los tres planes en tres columnas separadas por líneas, con el plan Crecimiento en olive panel. Enlace al catálogo completo.
10. **Resultados.** Tres testimonios reales en cita grande.
11. **Sobre mí.** Dos columnas. Foto a un lado, texto corto y los cinco países al otro. Sobre fondo canvas.
12. **Auditoría gratis.** Una banda sencilla con un título y un botón.
13. **Preguntas frecuentes.** Acordeón de seis a ocho preguntas.
14. **Cierre.** Frase grande, botón de WhatsApp y enlace al formulario.
15. **Pie de página.**
Botón flotante de WhatsApp en escritorio, y barra fija inferior en móvil. Voz de marca en plural en todo el sitio.

### 6.2 Boceto del primer pantallazo (escritorio)
```
+--------------------------------------------------------------+
| logo      Soluciones  Planes  Proyectos  Resultados   ES EN  [Hablemos] |
+--------------------------------------------------------------+
|                                                              |
|  SOLUCIONES DIGITALES A TU MEDIDA                            |
|  ______ (línea que crece)                                    |
|                                                              |
|  Tienes la idea.                                             |
|  Nosotros la convertimos en                                  |
|  un negocio que vende.          (frase en arena)             |
|                                                              |
|  Diseñamos páginas de ventas, tiendas, sistemas y            |
|  plataformas a tu medida. Te lo entregamos instalado         |
|  y con todos los derechos.                                   |
|                                                              |
|  [ Cuéntame tu idea ]  ( Ver soluciones )                    |
|                                                              |
|  ● Clientes en Colombia, Venezuela, Perú, México y EEUU      |
+--------------------------------------------------------------+
```

### 6.3 Página de cada servicio
Promesa como titular. Después: el problema en las palabras del cliente, los beneficios con la animación temática y las imágenes deslizables, cómo funciona, los niveles con precio, preguntas propias del servicio, servicios relacionados y el botón de cotizar con el mensaje de WhatsApp ya escrito.

### 6.4 Catálogo (servicios y precios)
Pestañas por categoría. Cada servicio muestra sus niveles en filas de tres columnas, con precio, qué incluye y "Cotizar". Un interruptor de "Servicio suelto" o "Plan combinado" cambia la vista.

### 6.5 Proyectos
Filtro por tipo de servicio. Lista de casos en filas grandes. Cada caso abre su propia página con problema, solución, resultado real, tecnologías y enlace. Sin ventanas emergentes.

### 6.6 Contacto
WhatsApp como camino principal y un formulario corto (nombre, correo, mensaje) con la etiqueta siempre visible.

### 6.7 Panel de edición
Privado y con inicio de sesión. Todo el sitio se edita desde aquí, como una plantilla: fotos, videos, textos, precios, bloques, colores, logo, menú y pie, en español e inglés, con vista previa antes de publicar. El detalle está en la sección 13 y en la decisión de arquitectura.

## 7. Movimiento
El WebKit pide momentos de alto impacto bien orquestados en lugar de microefectos sueltos. Aquí el movimiento tiene dos capas: una base muy tranquila para toda la interfaz, y una animación temática por servicio que explica lo que cada uno hace. Las temáticas entran en la categoría "explicación", que el WebKit permite en superficies de marketing.

Curvas: entrada (0,23; 1; 0,32; 1). Movimiento en pantalla (0,77; 0; 0,175; 1). Panel lateral (0,32; 0,72; 0; 1). Lineal solo para movimiento constante. Nunca una entrada que arranque lenta, nunca escala cero, solo transformación y opacidad (y recorte para revelados).

### 7.1 Base
| Dónde | Qué pasa | Duración | Motivo |
|---|---|---|---|
| Carga del inicio | Etiqueta, titular línea por línea, apoyo y botones entran en cascada, una sola vez | 600 ms, cascada de 60 ms | Primera impresión |
| Línea que crece | Una línea fina de arena se dibuja de izquierda a derecha bajo cada etiqueta de sección | 500 ms | Motivo de marca: crecimiento |
| Scroll | Los bloques suben 12 px y aparecen, una sola vez | 500 ms | Ritmo de lectura |
| Pestañas de soluciones | La barra activa se desliza y el panel cambia con fundido y 2 px de desenfoque | 250 ms y 200 ms | Que el cambio se entienda |
| Carrusel | Arrastre con inercia y ajuste al borde con resorte | 500 ms | Sensación física |
| Filas de dolor | Al pasar el cursor cambia la superficie, la flecha avanza 4 px y la comilla nude se aclara | 150 ms | Invitar al clic |
| Cómo trabajamos | La línea que une los pasos se dibuja al bajar y cada paso se enciende al llegar | Lineal, atada al scroll | Explicar el proceso |
| Proyectos | La captura larga se desplaza dentro del marco del portátil al pasar el cursor | 1,2 s | Mostrar que es real |
| Planes | El selector desliza una píldora y los precios cambian con fundido corto | 200 ms | Cambio de estado |
| Botones | Al presionar se reducen a 97 por ciento. El color pasa de arena a nude al pasar el cursor | 120 ms | Respuesta inmediata |
| Preguntas frecuentes | El acordeón abre y cierra | 200 ms | Estado legible |
| Menú de hamburguesa | Panel lateral, opciones en cascada de 50 ms y fondo que se oscurece | 500 ms y 250 ms | Coherencia espacial |
| Menú grande de escritorio | Se abre desde su botón | 200 ms | Nace de su origen |
| Idioma y página | Fundido corto del texto y entre páginas | 150 y 200 ms | Evitar saltos bruscos |

### 7.2 Animaciones temáticas por servicio
Cada una vive dentro del marco de producto de su panel. Se reproducen una sola vez al activar la pestaña, con un botón "Repetir". Toda cifra o dato que aparezca es de ejemplo y está marcado como tal.

| Servicio | Qué muestra la animación | Duración total |
|---|---|---|
| Página de Ventas y Reservas | Una página pequeña: el botón "Reservar" se presiona, se ilumina un horario en el calendario, entra una confirmación "Cita agendada, abono recibido" | 3 s |
| Tienda y Catálogo Online | Productos que aparecen en cascada, un toque en uno arma el pedido de WhatsApp y el contador del inventario baja | 3 s |
| Tiendas Shopify | Una tienda que se arma bloque por bloque: encabezado, productos, carrito y pago | 3 s |
| Tiendas en Amazon | Un listado antes y después: el título se reescribe, aparecen las viñetas y una barra de posición sube. Datos de ejemplo | 3,5 s |
| Amazon Afiliados | Una reseña con enlace: un clic hace subir un contador de comisión de ejemplo | 3 s |
| Sistema Administrativo Personalizado | Un tablero: las ventas del día suben hasta su valor, la barra de margen se llena y un semáforo pasa a rojo con el aviso "Vence en 6 días" | 3,5 s |
| Plataformas a la Medida | Una nota "mi idea" se convierte en bocetos de pantallas, luego en la app terminada con la marca "Instalado" | 4 s |
| Identidad de Marca | El trazo del logo se dibuja, se rellenan las muestras de oliva, arena y nude, aparece una plantilla para redes | 3,5 s |
| Contenido y Redes | Una cuadrícula de publicaciones se llena una por una y los puntos del calendario se encienden | 3 s |
| Asesoría y Mentoría | Una hoja de ruta se dibuja y sus hitos se encienden en secuencia | 3 s |
| Auditoría de Ventas | Una línea escáner recorre una página de ejemplo y aparecen tres marcas de problema | 3 s |

**Movimiento reducido.** Se muestra el estado final sin desplazamiento, y se mantienen los fundidos y el color. Nunca se anima: acciones de teclado, el panel de edición, ni el scroll (no se secuestra). Nada rebota en bucle.

## 8. Lo que se hace y lo que no
**Se hace**
* Capas de verde oliva y bordes de 1 px para definir cada bloque.
* Un solo botón principal por pantalla.
* Filas y columnas separadas por líneas en lugar de tarjetas repetidas.
* Composiciones alineadas a la izquierda y con ritmo de espacios distintos.
* Precios visibles, con "Desde", en cifras tabulares.
* Texto en español natural: coma, punto, dos puntos.

**No se hace**
* Dorado, marfil, crema, degradados en texto ni sombras decorativas. El resplandor de oliva viene apagado.
* Tarjetas dentro de tarjetas, ni una cuadrícula de tarjetas idénticas con ícono, título y texto.
* Ventanas emergentes cuando una página propia resuelve mejor.
* Guiones para separar palabras o frases.
* Datos, cifras o testimonios inventados.

## 9. Responsive
Puntos de control: 375, 768, 1024 y 1440 px. En móvil: hamburguesa, titular de 44 px, pestañas convertidas en una lista de acordeón, carrusel a pantalla completa por deslizamiento, barra fija de WhatsApp y objetivos táctiles de al menos 44 px con 8 px de separación.

## 10. Accesibilidad y rendimiento
* Contraste mínimo 4,5 a 1 en texto y 3 a 1 en texto grande.
* Enlace para saltar al contenido, foco visible en sand, orden de foco igual al visual.
* Pestañas y carrusel operables con teclado. Nada depende solo del cursor.
* Movimiento reducido respetado. Las animaciones temáticas tienen un texto equivalente para lectores de pantalla.
* Un solo h1 por página, jerarquía de encabezados sin saltos, alt en cada imagen.
* Metas: LCP menor a 2,5 s, CLS menor a 0,1, imágenes en AVIF o WebP con espacio reservado, fuente propia con swap.
* Sin emojis como íconos: íconos SVG.

## 11. Tokens de arranque
```css
:root {
  --color-base: #0B0F09;
  --color-canvas: #10160D;
  --color-raised: #172012;
  --color-olive-panel: #253320;
  --color-line: #26321F;
  --color-line-strong: #3A4A2E;
  --color-text: #F3F4EE;
  --color-text-soft: #B2B6A8;
  --color-sand: #CDBA9C;
  --color-nude: #D4B5A0;
  --color-olive: #9AAB78;

  --font-family: 'Figtree', ui-sans-serif, system-ui, sans-serif;
  --radius-card: 12px;
  --radius-input: 8px;
  --radius-pill: 9999px;

  --container: 1200px;
  --section-gap: 96px;

  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
}
```

## 12. Guía para agentes
1. **Titular del inicio.** Figtree 600, tamaño fluido de 44 a 72 px, espaciado menos 0,02 em, color text, alineado a la izquierda, máximo 12 palabras. La frase clave va en sand, sin degradado. Debajo, apoyo en 17 a 20 px color text soft, ancho máximo 560 px.
2. **Fila de dolor.** Ancho completo, altura mínima de 72 px, frase entre comillas en 28 px con las comillas en nude, flecha a la derecha, línea inferior line. Al pasar el cursor, fondo raised en 150 ms. Sin sombra, sin tarjeta.
3. **Panel de solución.** Título de bloque, dos líneas de apoyo, tres beneficios con un check olive de 16 px, precio "Desde $99" en text soft y un botón principal en sand. A la derecha, un marco de producto con la animación temática.
4. **Fila de niveles.** Tres columnas iguales separadas por líneas de 1 px. El nivel recomendado con fondo olive panel y una pastilla nude. Precio en 40 px, lista de lo que incluye con checks olive, botón "Cotizar" en fantasma.
5. **Sección estándar.** Etiqueta sand en mayúsculas de 12 px con la línea que crece, título de 32 a 48 px, descripción en text soft con ancho máximo de 640 px, y 96 px de separación con la sección siguiente.

## 13. Diseño editable tipo plantilla
Requisito de Daniela: todo el diseño debe poder editarlo ella, como una plantilla, sin tocar código. Por eso cada decisión de este documento es un ajuste editable y no un valor fijo en el código.

**Qué puede cambiar Daniela**
| Área | Qué se edita |
|---|---|
| Fotos y videos | Subir, reemplazar y ordenar imágenes y videos de cada servicio, proyecto, testimonio y de la sección Sobre mí. Cada imagen con su texto alternativo en español e inglés. |
| Textos | Todos los titulares, apoyos, botones, preguntas y textos legales, en español y en inglés. |
| Precios y servicios | Nombre, gancho, descripción, niveles, precios, orden y visibilidad de cada servicio, y lo que incluye cada plan. |
| Bloques | Cada página es una lista de bloques que se arrastran para cambiar el orden, se ocultan, se duplican o se eliminan. Los bloques disponibles son Promesa, Confianza, Dolores, Soluciones, Pasos, Demo, Proyectos, Planes, Testimonios, Sobre mí, Banda de acción, Preguntas, Texto libre, Galería o video y Contacto. |
| Colores | Todos los colores de la sección 2, cada uno por rol (fondo, superficie, texto, acento) y no por lugar. El sitio entero cambia al instante y avisa si un par de colores queda ilegible. |
| Animaciones | Activar o apagar la línea que crece, el resplandor de oliva y cada animación temática, y cambiar su velocidad entre lenta, normal y rápida. |
| Tipografía y forma | Elegir la familia de letra de una lista curada, el tamaño base y el redondeo de botones y tarjetas. |
| Logo | Subir el logo en versión para fondo oscuro y para fondo claro, con su texto alternativo. |
| Menú | Agregar, quitar y ordenar enlaces, submenús y el botón de acción, por idioma. |
| Pie de página | Columnas, enlaces, redes sociales, texto legal y datos de contacto. |
| Contacto | Número de WhatsApp, correo, destino del formulario y mensaje prellenado de cada botón. |
| SEO | Título, descripción e imagen para compartir de cada página, por idioma. |

**Barreras para que el diseño siga limpio**
* Los colores se eligen por rol y se prueban contra 4,5 a 1 de contraste antes de publicar.
* La tipografía sale de una lista curada. Una fuente nueva requiere agregarla a la lista una vez.
* Vista previa completa antes de publicar, e historial para volver a cualquier versión.
* Botón "Restaurar diseño base" que devuelve colores, tipografía y forma a lo aprobado en este documento.
* Los bloques traen variantes definidas. No se puede romper la retícula ni saltarse los márgenes.

**Cómo se consigue.** Necesita un panel de edición conectado al sitio. Ver "ADR 02 Arquitectura del sitio", que además evalúa la opción de no tener panel.
