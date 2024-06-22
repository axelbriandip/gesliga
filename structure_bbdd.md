# Diagrama Entidad-Relación para Gesliga1

## Entidades y Atributos

### Usuarios
- `id_user` (PK)
- `rol`
- `first_name`
- `second_name`
- `first_lastname`
- `second_lastname`
- `photo`
- `gender`
- `dni`
- `birthdate`
- `nationality`
- `phone`
- `date_register`
- `date_last_update`
- `email`
- `password`
- `status`

### Clubs
- `id_club` (PK)
- `name`
- `name_abb`
- `name_large`
- `fundation`
- `president`
- `shield`
- `shield_black`
- `shield_white`
- `delegado_id` (FK)
- `status`

### Jugadores
- `id_player` (PK)
- `first_name`
- `second_name`
- `first_lastname`
- `second_lastname`
- `photo`
- `gender`
- `dni`
- `birthdate`
- `nationality`
- `position`
- `date_register`
- `date_last_update`
- `club_id` (FK)
- `status`

### Sanciones
- `id_sanction` (PK)
- `id_player` (FK)
- `competence`
- `stage`
- `description`
- `games`
- `date_init`
- `date_finish`

### Planillas de Juego
- `id_spreadsheet` (PK)
- `date`
- `competence`
- `stage`
- `date`
- `local`
- `visit`
- `stadium`
- `players`
- `id_club` (FK)
- `status`

### Transferencias
- `id_transfer` (PK)
- `id_player` (FK)
- `id_origin_club` (FK)
- `id_destinity_club` (FK)
- `date`
- `amount`
- `response_league`
- `status`

### Historial de Sanciones
- `id_sanctions_history` (PK)
- `id_player` (FK)
- `competence`
- `stage`
- `description`
- `games`
- `date_init`
- `date_finish`

### Historial de Transferencias
- `id_transfers_history` (PK)
- `id_player` (FK)
- `id_origin_club` (FK)
- `date_init`
- `date_finish`
- `id_destinity_club` (FK)

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