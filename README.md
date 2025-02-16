# Nombre del Proyecto
Este proyecto es una recopilación de practicas realizadas sobre el uso de signals en Angular. Tecnología implementada en el frameworks a partir de la version 18.
[Link del sitio en vivo](https://kanixdaniel.github.io/directives-signals-angular/signals/counter)

## Características principales
- El proyecto tiene un layout con las vistas disponibles
- Contiene las siguientes vistas:
    - Un contador que se ejecuta con signals (de lectura y escritura y de solo lectura)
    - Información de un usuario consultado desde [reqres.in](https://reqres.in/) con signals y nuevo estándar de inyección de servicios
    - Un formulario que simula la información de un usuario y demuestra la eficiencia (en comparación con zone.js) al mostrar los cambios en front cuando se tienen mas de un signal y en alguno ocurre un cambio

## Tecnologías utilizadas

- **Frontend**: Angular, Bootstrap
- **Backend**: API de [reqres.in](https://reqres.in/)
- **Base de datos**: N/A
- **Otras herramientas**: GitHub Pages

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kanixdaniel/directives-signals-angular.git
   ```
2. Instala las dependencias:
   ```bash
   cd directives-signals-angular
   npm install
   ```
3. Configura las variables de entorno. Crea un archivo *.env* en la raíz del proyecto tomando como base el archivo *.env.template* incluido en el proyecto.

4. Levanta el proyecto:
   ```bash
   npm run start
   yarn dev
   ng serve
   ```

## Contibución

¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu feature o corrección: `git checkout -b nombre-de-tu-rama`
3. Realiza tus cambios y haz commit: `git commit -m "Descripción de tus cambios”`
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:
* [**Email**](mailto:contact.isc.dpg@gmail.com)
* [**LinkedIn**](https://linkedin.com/in/kanix-daniel)