# Gesliga

## Descripción
Gesliga es una aplicación web diseñada para la gestión integral de derechos de pases de jugadores en ligas deportivas. Facilita la administración de clubes, categorías, jugadores, sanciones y la generación de planillas de juego, optimizando el proceso organizativo dentro de la liga.

## Funcionalidades Principales
- Autenticación segura con gestión de roles para administradores, delegados de clubes y el tribunal de disciplina.
- Administración completa de clubes, incluyendo asignación de delegados y gestión de datos.
- Registro detallado de jugadores con historial de transferencias y sanciones.
- Creación y gestión de categorías y equipos asociados a clubes específicos.
- Generación automatizada de planillas de juego con validación de jugadores elegibles.
- Seguimiento y registro de sanciones disciplinarias con restricciones automáticas en participación.
- Interfaz administrativa intuitiva para gestión de usuarios, datos y generación de informes.

## Roles, Permisos y Alcances del Proyecto Gesliga

### Roles de Usuario

#### Administrador
- **Descripción:** Usuario con acceso completo a todas las funcionalidades de Gesliga.
- **Permisos:**
  - Gestión de usuarios: creación, edición y eliminación de cuentas de usuario.
  - Administración de clubes: alta, modificación y eliminación de clubes.
  - Asignación de roles y permisos a otros usuarios.
  - Acceso completo a la gestión de jugadores, categorías y equipos.
  - Generación de informes y estadísticas del sistema.
  - Gestión de sanciones y planillas de juego.

#### Delegado de Club
- **Descripción:** Representante autorizado de un club dentro de Gesliga.
- **Permisos:**
  - Gestión del club: edición de datos del club y asignación de jugadores.
  - Creación y edición de planillas de juego para los equipos del club.
  - Seguimiento de sanciones aplicadas a jugadores del club.
  - Visualización de informes específicos de actividades del club.

#### Tribunal de Disciplina
- **Descripción:** Entidad encargada de la administración y aplicación de sanciones disciplinarias.
- **Permisos:**
  - Registro y gestión de sanciones: imposición y seguimiento de sanciones a jugadores.
  - Validación y aprobación de solicitudes relacionadas con sanciones y transferencias.
  - Acceso a registros históricos de sanciones y transferencias para auditorías.

### Alcances por Funcionalidad

1. **Autenticación y Gestión de Usuarios:**
   - **Descripción:** Sistema de registro, inicio de sesión y gestión de usuarios con roles diferenciados.
   - **Alcance:** Implementación de JWT para asegurar sesiones seguras y gestión centralizada de cuentas.

2. **Administración de Clubes:**
   - **Descripción:** Gestión de datos de clubes, incluyendo información básica y asignación de delegados.
   - **Alcance:** Funcionalidad completa de CRUD para clubes con validaciones de integridad de datos.

3. **Gestión de Jugadores:**
   - **Descripción:** Registro y seguimiento de jugadores, incluyendo transferencias entre clubes.
   - **Alcance:** Mantenimiento de historial detallado de jugadores con actualizaciones automáticas de datos.

4. **Gestión de Categorías y Equipos:**
   - **Descripción:** Definición y gestión de categorías de equipos y asignación a clubes.
   - **Alcance:** Funcionalidades específicas para la creación y modificación de categorías y equipos dentro de la liga.

5. **Generación de Planillas de Juego:**
   - **Descripción:** Creación de planillas de juego para partidos con criterios de elegibilidad y restricciones.
   - **Alcance:** Validación automática de jugadores elegibles según sanciones activas y requisitos de competición.

6. **Sistema de Sanciones:**
   - **Descripción:** Registro y seguimiento de sanciones disciplinarias impuestas a jugadores.
   - **Alcance:** Integración con otras funcionalidades para garantizar restricciones automáticas en participación según sanciones.

7. **Historial de Sanciones y Transferencias:**
   - **Descripción:** Mantenimiento de registros históricos detallados de sanciones y transferencias de jugadores.
   - **Alcance:** Acceso a registros históricos para análisis, auditoría y seguimiento de eventos pasados.

8. **Interfaz Administrativa y Seguridad:**
   - **Descripción:** Panel administrativo intuitivo y seguro para la gestión eficiente de todas las funcionalidades.
   - **Alcance:** Implementación de medidas de seguridad avanzadas y gestión de permisos para protección de datos sensibles.

## Tecnologías Utilizadas

### Frontend
- **React.js:** Biblioteca JavaScript para construir interfaces de usuario. Permite la creación de componentes reutilizables que facilitan el desarrollo frontend modular y eficiente.
- **HTML y CSS:** Lenguajes fundamentales para la estructura y diseño visual de la aplicación web, respectivamente.
- **Bootstrap:** Framework de CSS para diseño responsive y componentes preestilizados que agilizan el desarrollo del frontend.

### Backend
- **Node.js:** Entorno de ejecución de JavaScript del lado del servidor, que utiliza un modelo de operaciones no bloqueantes y orientado a eventos para manejar múltiples solicitudes simultáneamente.
- **Express.js:** Framework de aplicaciones web para Node.js que proporciona una capa delgada de características web y facilita la creación de API RESTful robustas y escalables.

### Base de Datos
- **PostgreSQL:** Sistema de gestión de bases de datos relacional de código abierto. Ofrece robustez, soporte para transacciones ACID, integridad referencial y escalabilidad, adecuado para aplicaciones que manejan datos complejos y relaciones entre entidades.

### Autenticación y Autorización
- **JSON Web Tokens (JWT):** Mecanismo seguro para la autenticación de usuarios mediante tokens que contienen información codificada y firmada digitalmente. Permite la verificación de identidad de usuarios y la gestión segura de sesiones.

### Almacenamiento de Imágenes
- **Amazon S3 (Simple Storage Service):** Servicio en la nube de Amazon Web Services (AWS) diseñado para almacenar y recuperar datos masivos. Ideal para almacenar imágenes y otros archivos estáticos utilizados en la aplicación.