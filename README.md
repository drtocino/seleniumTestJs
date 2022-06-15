# Actividades automatizadas con selenium
## Objetivo de este programa
- Abrir un navegador
- Iniciar sesion en Facebook llenando los campos de acceso
- Cerrar el navegador
## Requisitos
- Tener instalado node y npm
- Tener instalado git
- Tener instalado firefox
## Inicializacion/instalacion
### Pasos
- Abrir una terminal y escribir o copiar: `git clone https://github.com/drtocino/seleniumTestJs.git`, luego presionar "Enter"
- Escribir `cd seleniumTestJs` y presionar "Enter"
- Escribir o copiar: `npm i`, luego presionar "Enter"
## Uso
### Pasos
- En una terminal abierta en la locacion del proyecto escribir o copiar: `npm test`, luego presionar "Enter"

## Notas
- Las lineas del 2, 6,y 9 del archivo test.js, deben descomentarse en caso de que el binary location o archivo ejecutable no se encuentre en la ruta por defecto. Cambiar la variable `binary` con lo que corresponda. (Comentar la linea 8)
- Facebook no hace uso de atributos como `id` o `name` en sus elementos del DOM de html, por lo que se dificulto realizar mas acciones de prueba. (Requiere mas investigacion)