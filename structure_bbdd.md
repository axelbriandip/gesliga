# Gesliga - Gestión de Ligas Deportivas

Gesliga es una aplicación web diseñada para gestionar de manera eficiente los derechos de pases de jugadores, así como la administración de equipos y encuentros dentro de una liga deportiva. Esta aplicación está orientada a ligas deportivas que necesitan un sistema robusto para manejar transferencias de jugadores, planificación de partidos y más.

## Entidades Principales

### User

- **id**: PK
- **firstName**: String
- **middleName**: String
- **lastName**: String
- **dni**: String
- **dateOfBirth**: Date
- **gender**: Enum (femenino/masculino/otro)
- **photo**: String (URL)
- **email**: String
- **password**: String
- **role**: Enum (admin, discipline, delegate, guest)
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Club

- **id**: PK
- **name**: String
- **fullName**: String
- **abbreviation**: String
- **foundation**: Date
- **legalInfo**: Object
- **president**: String
- **crest**: String (URL)
- **crestWhite**: String (URL)
- **crestBlack**: String (URL)
- **delegateId**: FK (User)
- **players**: Array of FK (Player)
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Player

- **id**: PK
- **firstName**: String
- **middleName**: String
- **lastName**: String
- **dni**: String
- **license**: String
- **dateOfBirth**: Date
- **gender**: Enum (femenino/masculino/otro)
- **position**: Enum
- **photo**: String (URL)
- **clubId**: FK (Club)
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Sanction

- **id**: PK
- **playerId**: FK (Player)
- **competition**: Enum
- **stage**: Enum
- **description**: String
- **numMatches**: Integer
- **startDate**: Date
- **endDate**: Date
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Match Sheet

- **id**: PK
- **date**: Date
- **league**: FK (League)
- **competition**: Enum (copa/liga)
- **stage**: String
- **clubId**: FK (Club)
- **opponentId**: FK (Club)
- **venue**: String
- **players**: Array of FK (Player)
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Transfer

- **id**: PK
- **playerId**: FK (Player)
- **sourceClubId**: FK (Club)
- **destinationClubId**: FK (Club)
- **date**: Date
- **notes**: String
- **amount**: Decimal
- **leagueResponse**: Boolean
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Pass

- **id**: PK
- **playerId**: FK (Player)
- **clubId**: FK (Club)
- **since**: Date
- **until**: Date
- **photo**: String (URL)
- **loan**: FK (Loan) // Opcional
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### Loan

- **id**: PK
- **passId**: FK (Pass) // Relación uno a uno
- **temporaryClubId**: FK (Club)
- **since**: Date
- **until**: Date
- **photo**: String (URL)
- **conditions**: String
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

### League

- **id**: PK
- **adminId**: FK (User)
- **name**: String
- **logo**: String (URL)
- **logoWhite**: String (URL)
- **logoBlack**: String (URL)
- **clubs**: Array of FK (Club)
- **createdAt**: Date
- **updatedAt**: Date
- **isActive**: Boolean

## Relaciones

1. **User - Club**
   - Un **User** puede ser delegado de un **Club**.
   - Relación: 1 a 1.

2. **Club - Player**
   - Un **Club** puede tener múltiples **Players**.
   - Relación: 1 a N.

3. **Player - Pass**
   - Un **Player** tiene un único **Pass**.
   - Relación: 1 a 1.

4. **Pass - Loan**
   - Un **Pass** puede estar asociado a un único **Loan**.
   - Relación: 1 a 1.

5. **Player - Sanction**
   - Un **Player** puede tener múltiples **Sanctions**.
   - Relación: 1 a N.

6. **Club - Match Sheet**
   - Un **Club** puede generar múltiples **Match Sheets**.
   - Relación: 1 a N.

7. **Player - Transfer**
   - Un **Player** puede tener múltiples **Transfers**.
   - Relación: 1 a N.

## Alcances

- **Usuarios** podrán registrarse con roles específicos que determinarán sus permisos.
- **Clubes** serán gestionados por delegados que podrán agregar y administrar jugadores.
- **Jugadores** podrán ser transferidos o prestados entre clubes.
- **Pases** de jugadores incluyen información contractual y opcionalmente de préstamos.
- **Préstamos** permiten la transferencia temporal de un jugador a otro club.
- **Sanciones** serán aplicadas y gestionadas por el tribunal de disciplina.
- **Planillas de Juego** permitirán registrar información de partidos y jugadores participantes.
- **Ligas** serán administradas por usuarios con rol de administrador.

## Roles y Permisos

| Rol        | Descripción                                                                                   |
|------------|-----------------------------------------------------------------------------------------------|
| admin      | Administrador principal con acceso completo a todas las funciones y datos de la aplicación.  |
| discipline | Responsable de la disciplina dentro de la liga, encargado de aplicar y gestionar sanciones.  |
| delegate   | Delegado de un club específico, con permisos para gestionar jugadores y planificar partidos. |
| guest      | Acceso limitado para visualizar información pública, como resultados de partidos y tablas de posiciones. |

