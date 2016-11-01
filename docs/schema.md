# Schema Information

## users
column name        | data type | details
----------------   |-----------|----------------------------
id                 | integer   | not null, primary key
username           | string    | not null, unique, indexed
password_digest    | string    | not null
session_token      | string    | not null, unique, indexed
name               | string    |
profile_description| text      |
image_url          | string    |
house              | string    |

- associations: users will have many places, bookings, and reviews

## places
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
host_id         | integer   | foreign key, not null, indexed
title           | string    | not null
longitude       | float     | not null, unique, indexed
latitude        | float     | not null, unique, indexed
description     | text      |
price_per_night | integer   | not null
region          | string    | not null
number_rooms    | not null  |
number_beds     | integer   | not null
max_guests      | integer   | not null
property_type   | string    | not null
house_rules     | text      |

- associations: place will belong to a host (user) and have many bookings, reviews, and images

## images
column name     | data type | details
----------------|-----------|--------------------------------
id              | integer   | not null, primary key
place_id        | integer   | not null, foreign key
url             | string    | not null

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
