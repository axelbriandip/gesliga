# Diagrama Entidad-Relación para Gesliga

## Entidades y Atributos

### Usuarios
- `id_usuario` (PK)
- `nombre`
- `email`
- `contraseña`
- `rol`

### Clubs
- `id_club` (PK)
- `nombre`
- `direccion`
- `delegado_id` (FK)

### Jugadores
- `id_jugador` (PK)
- `nombre`
- `fecha_nacimiento`
- `genero`
- `club_id` (FK)

### Sanciones
- `id_sancion` (PK)
- `jugador_id` (FK)
- `competencia`
- `tipo`
- `fecha_inicio`
- `fecha_fin`

### Planillas de Juego
- `id_planilla` (PK)
- `fecha`
- `competencia`
- `club_id` (FK)

### Transferencias
- `id_transferencia` (PK)
- `jugador_id` (FK)
- `club_origen_id` (FK)
- `club_destino_id` (FK)
- `fecha_inicio`
- `fecha_fin`

### Historial de Sanciones
- `id_historial_sancion` (PK)
- `jugador_id` (FK)
- `competencia`
- `tipo`
- `fecha_inicio`
- `fecha_fin`

### Historial de Transferencias
- `id_historial_transferencia` (PK)
- `jugador_id` (FK)
- `club_origen_id` (FK)
- `club_destino_id` (FK)
- `fecha_inicio`
- `fecha_fin`

## Relaciones

- **Usuarios** tiene un atributo `rol`.
- **Clubs** tiene una relación de uno a uno con **Usuarios** (delegado).
- **Clubs** tiene una relación de uno a muchos con **Jugadores**.
- **Jugadores** tiene una relación de uno a muchos con **Sanciones**.
- **Jugadores** tiene una relación de muchos a muchos con **Planillas de Juego**.
- **Jugadores** tiene una relación de uno a muchos con **Transferencias**.
- **Jugadores** tiene una relación de uno a muchos con **Historial de Sanciones**.
- **Jugadores** tiene una relación de uno a muchos con **Historial de Transferencias**.
- **Transferencias** tiene una relación de uno a uno con **Clubs** para `club_origen_id` y `club_destino_id`.
- **Historial de Transferencias** tiene una relación de uno a uno con **Clubs** para `club_origen_id` y `club_destino_id`.

Este esquema representa de manera estructurada las entidades, atributos y relaciones del sistema Gesliga. Puedes usar este formato en un archivo Markdown (`.md`) para documentar tu proyecto de manera clara y concisa.