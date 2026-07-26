# Sitio web - JA Soluciones Logísticas e Integrales

Sitio web estático, responsive y listo para publicar en GitHub Pages.

## Contenido

- `index.html`: página principal.
- `assets/css/styles.css`: estilos, diseño responsive y animaciones.
- `assets/js/main.js`: menú móvil, animaciones, filtros y formulario de WhatsApp.
- `assets/img/`: imágenes optimizadas en formato WebP.
- `index-archivo-unico.html`: versión autónoma con imágenes, estilos y JavaScript integrados en un solo archivo.

## Publicar en GitHub Pages

1. Cree un repositorio nuevo en GitHub.
2. Suba **todo el contenido de esta carpeta**, conservando la estructura.
3. En el repositorio, abra `Settings` → `Pages`.
4. En `Build and deployment`, seleccione `Deploy from a branch`.
5. Elija la rama `main` y la carpeta `/ (root)`.
6. Guarde los cambios. GitHub mostrará la dirección pública del sitio.

## Personalización rápida

- Teléfonos y correo: buscar en `index.html` los números `320 449 1926`, `313 266 6395` y el correo.
- Textos: editar directamente en `index.html`.
- Colores: modificar las variables al inicio de `assets/css/styles.css`.
- Imágenes: reemplazar archivos dentro de `assets/img/` manteniendo el mismo nombre.

## Funcionamiento del formulario

El formulario no requiere servidor. Al enviarlo, crea un mensaje con los datos y abre WhatsApp al número configurado.

## Opción de un solo archivo

Si prefiere publicar únicamente un archivo, use `index-archivo-unico.html`. Para que funcione como portada de GitHub Pages, cámbiele el nombre a `index.html`. Esta versión no necesita la carpeta `assets`.
