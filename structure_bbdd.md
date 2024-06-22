# Diagrama Entidad-Relación para Gesliga

## Entidades y Atributos

### User
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

### Club
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

### Player
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

### Sanction
- `id_sanction` (PK)
- `id_player` (FK)
- `competence`
- `stage`
- `description`
- `games`
- `date_init`
- `date_finish`
- `status`

### Spreadsheet
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

### Transfer
- `id_transfer` (PK)
- `id_player` (FK)
- `id_origin_club` (FK)
- `id_destinity_club` (FK)
- `date`
- `amount`
- `response_league`
- `status`

### Sanctions_history
- `id_sanctions_history` (PK)
- `id_player` (FK)
- `sanctions`
- `status`

### Transfers_history
- `id_transfers_history` (PK)
- `id_player` (FK)
- `transfers`
- `status`

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
- **Historial de Transferencias** tiene una relación de uno a muchos con **Jugadores**.

Este esquema representa de manera estructurada las entidades, atributos y relaciones del sistema Gesliga.