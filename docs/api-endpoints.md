# API Endpoints

## HTML API

### Root
  - `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Places
- `GET /api/places`
- `POST /api/places`
- `GET /api/places/:id`
- `PATCH /api/places/:id`
- `DELETE /api/places/:id`

### Bookings
- `GET /api/places/:id/bookings`
- `POST /api/places/:id/bookings`
- `GET /api/places/:id/bookings/:id`
- `PATCH /api/places/:id/bookings/:id`
- `DELETE /api/places/:id/bookings/:id`

### REVIEWS
- a place's reviews will be included in the place show page
- `GET /api/places/:id/reviews`
- `POST /api/places/:id/reviews`
- `GET /api/places/:id/reviews/:id`
- `PATCH /api/places/:id/reviews/:id`
- `DELETE /api/places/:id/reviews/:id`
