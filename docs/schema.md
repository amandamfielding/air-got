# Schema Information

## users
column name        | data type | details
----------------   |-----------|----------------------------
id                 | integer   | not null, primary key
username           | string    | not null, unique, indexed
password_digest    | string    | not null
session_token      | string    | not null, unique, indexed
name               | string    |
about_me           | text      |
image_url          | string    |
allegiance_id      | integer   | foreign_key

- associations: users will have many places, bookings, and reviews, and belong to a house

## places
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
host_id         | integer   | foreign key, not null, indexed
title           | string    | not null
lng             | float     | not null, unique, indexed
lat             | float     | not null, unique, indexed
description     | text      |
price_per_night | integer   | not null
region_id       | string    | not null, foreign_key
number_rooms    | not null  |
number_beds     | integer   | not null
max_guests      | integer   | not null
property_type   | string    | not null
house_rules     | text      |
allegiance_id   | integer   | foreign_key
stars           | integer   |

- associations: places will belong to a host(user), a region, and a house, and have many bookings, reviews, and images

## regions
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
name            | string    | not null
image_url       | string    | not null

## images
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
place_id        | integer   | not null, foreign key
url             | string    | not null

## allegiances
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
house_name            | string    | not null
flag_image_url  | string    |

## bookings
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
place_id        | integer   | foreign key, not null, indexed
user_id         | integer   | foreign key, not null, indexed
check_in_date   | date      | not null
check_out_date  | date      | not null
number_of_guests| integer   | not null

- associations: bookings will belong to a place and a user

## reviews
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   |  not null, primary key
place_id        | integer   | foreign key, not null, indexed
author_id       | integer   | foreign key, not null, indexed
number_of_stars | integer   | not null
body            | text      |

- associations: reviews will belong to a place and an author(user)
