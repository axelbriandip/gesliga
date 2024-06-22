# Diagrama Entidad-Relación para Gesliga

## Entidades y Atributos

### User
- `id_user` (PK): Integer
- `rol`: String
- `first_name`: String
- `second_name`: String
- `first_lastname`: String
- `second_lastname`: String
- `photo`: String (ruta o referencia a la imagen del perfil)
- `gender`: String (puede ser "M" o "F" por ejemplo)
- `dni`: String
- `birthdate`: Date
- `nationality`: String
- `phone`: String
- `date_register`: DateTime
- `date_last_update`: DateTime
- `email`: String
- `password`: String (hashed)
- `status`: String (por ejemplo, "activo", "inactivo", etc.)

### Club
- `id_club` (PK): Integer
- `name`: String
- `name_abb`: String
- `name_large`: String
- `foundation`: Date
- `president`: String
- `shield`: String (ruta o referencia al escudo del club)
- `shield_black`: String (ruta o referencia al escudo del club)
- `shield_white`: String (ruta o referencia al escudo del club)
- `delegado_id` (FK): Integer (referencia al delegado del club)
- `status`: String

### Player
- `id_player` (PK): Integer
- `first_name`: String
- `second_name`: String
- `first_lastname`: String
- `second_lastname`: String
- `photo`: String (ruta o referencia a la imagen del jugador)
- `gender`: String
- `dni`: String
- `birthdate`: Date
- `nationality`: String
- `position`: String
- `date_register`: DateTime
- `date_last_update`: DateTime
- `club_id` (FK): Integer (referencia al club del jugador)
- `status`: String

### Sanction
- `id_sanction` (PK): Integer
- `id_player` (FK): Integer (referencia al jugador sancionado)
- `competence`: String (por ejemplo, "Liga", "Copa")
- `stage`: String (etapa o nivel de la competencia)
- `description`: String
- `games`: Integer (cantidad de partidos de sanción)
- `date_init`: Date
- `date_finish`: Date
- `status`: String

### Spreadsheet
- `id_spreadsheet` (PK): Integer
- `date`: Date
- `competence`: String
- `stage`: String
- `local`: String
- `visit`: String
- `stadium`: String
- `players`: Array
- `id_club` (FK): Integer (referencia al club que genera la planilla)
- `status`: String

### Transfer
- `id_transfer` (PK): Integer
- `id_player` (FK): Integer (referencia al jugador transferido)
- `id_origin_club` (FK): Integer (referencia al club de origen)
- `id_destiny_club` (FK): Integer (referencia al club de destino)
- `date`: Date
- `amount`: Decimal (monto de la transferencia, si aplica)
- `response_league`: String (respuesta de la liga, por ejemplo "aprobado", "pendiente", "rechazado")
- `status`: String

### Sanctions_history
- `id_sanctions_history` (PK): Integer
- `id_player` (FK): Integer (referencia al jugador)
- `sanctions`: Array
- `status`: String


## Relaciones entre Entidades

#### User - Club
- Un usuario puede pertenecer a un solo club.
- Un club tiene un delegado (usuario).

#### Club - Player
- Un club puede tener muchos jugadores.
- Un jugador pertenece a un solo club.

#### Player - Sanction
- Un jugador puede tener muchas sanciones.
- Una sanción pertenece a un solo jugador.

#### Club - Spreadsheet
- Un club puede generar muchas planillas de juego.
- Una planilla de juego pertenece a un solo club.

#### Club - Transfer
- Un club puede tener muchas transferencias (como comprador o vendedor).
- Una transferencia involucra a un solo club como comprador y otro como vendedor.

#### Player - Transfer
- Un jugador puede estar involucrado en muchas transferencias (como jugador transferido).
- Una transferencia involucra a un solo jugador.

#### Player - Sanctions_history
- Un jugador puede tener un historial de muchas sanciones.
- Cada entrada en el historial de sanciones pertenece a un solo jugador.

Este esquema representa de manera estructurada las entidades, atributos y relaciones del sistema Gesliga.