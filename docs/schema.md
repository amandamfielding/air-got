# Schema Information

## USERS
column name        | data type | details
----------------   |-----------|----------------------------
id                 | integer   | not null, primary key
username           | string    | not null, unique, indexed
password_digest    | string    | not null
session_token      | string    | not null, unique, indexed
name               | string    |
profile_description| text      |
image_url          | string    |

- associations: users will have many places, bookings, and reviews

## PLACES
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
host_id         | integer   | foreign key, not null, indexed
title           | string    | not null
longitude       | float     | not null, unique, indexed
latitude        | float     | not null, unique, indexed
image_urls      | array     |
description     | text      |
price_per_night | integer   | not null
region          | string    | not null
number_rooms    | not null  |
number_bathrooms| not null  |
number_beds     | integer   | not null
max_guests      | integer   | not null

- associations: place will belong to a host (user) and have many bookings and reviews

## BOOKINGS
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
place_id        | integer   | foreign key, not null, indexed
user_id         | integer   | foreign key, not null, indexed
check_in_date   | date      | not null
check_out_date  | date      | not null
number_of_guests| integer   | not null

- associations: bookings will belong to a place and a user

## REVIEWS
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   |  not null, primary key
place_id        | integer   | foreign key, not null, indexed
author_id       | integer   | foreign key, not null, indexed
number_of_stars | integer   | not null
body            | text      |
date            | date      | not null

- associations: reviews will belong to a place and an author(user)
