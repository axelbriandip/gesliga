# Gesliga

Gesliga es una aplicación web diseñada para la gestión integral de derechos de pases y sanciones de jugadores en una liga deportiva. Esta plataforma permite a los clubes administrar sus jugadores, generar planillas de juego, gestionar sanciones y realizar transferencias de jugadores de manera eficiente y centralizada.

## Características Principales

- **Gestión de Usuarios y Roles**
  - Registro y autenticación de usuarios.
  - Asignación de roles (Admin, Delegado, Tribunal de Disciplina, Invitado).
  - Gestión de permisos según los roles definidos.

- **Gestión de Clubes y Jugadores**
  - CRUD de clubes y jugadores.
  - Asociación de jugadores a clubes.
  - Solicitudes de modificaciones por parte de delegados, sujetas a aprobación por la liga.
  - Mantenimiento de historial de sanciones y transferencias de jugadores.

- **Gestión de Sanciones**
  - Registro de sanciones por competencia (Torneo de Liga, Copa).
  - Definición de tipo de sanción (por partidos o tiempo).
  - Inhabilitación automática de jugadores sancionados según la competencia.
  - Gestión de sanciones por el Tribunal de Disciplina.

- **Generación de Planillas de Juego**
  - Filtrado de jugadores por género y edad.
  - Inclusión de jugadores de categorías inferiores si la edad lo permite.
  - Generación de planillas de juego en formato descargable.

- **Transferencias y Movimientos de Jugadores**
  - Solicitudes de transferencias interclubes por parte de delegados.
  - Derecho de pase con duración de 2 años, con necesidad de renovación.
  - Liberación de jugadores y cesión a préstamo (6 o 12 meses).

- **Historial y Seguimiento**
  - Historial completo de sanciones y transferencias.
  - Seguimiento del derecho de pase y estado de jugadores.

- **Notificaciones y Alertas**
  - Notificaciones sobre el estado de solicitudes.
  - Alertas sobre renovación de derechos de pase.
  - Informes de jugadores sancionados.

- **Acceso Invitado**
  - Visualización de información pública:
    - Listado de clubes y sus jugadores.
    - Listas de buena fe.
    - Planillas de juego.
  - Acceso restringido a funcionalidades de modificación y datos sensibles.

## Estructura del Proyecto

- **Backend**
  - Implementación de una API RESTful con Node.js y Express.
  - Gestión de la base de datos con Sequelize y PostgreSQL.

- **Frontend**
  - Interfaz de usuario desarrollada con React.
  - Diseño responsivo y accesible para diferentes roles de usuarios.

- **Base de Datos**
  - Modelado de entidades y relaciones para la gestión de datos.
  - Migraciones y seeders para la inicialización de datos.
