```js
{
  currentUser: {
    id: 1,
    username: "mandy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  places: {
    1: {
      title: "Red Keep",
      description: "quaint little palace",
      region: "King's Landing",
      host_id: 1,
      price_per_night: 1500,
      image_urls: {
        1: "",
        2: ""
      }
      latitude: 5.23,
      longitude 156.57,
      number_rooms: 24,
      number_beds: 32,
      max_guests: 40,
      property_type: "palace",
      house_rules: "no fighting with the King's Guard",
    }  
  },
  reviews: {
    1: {
      body: "awesome place",
      author_id: 1,
      place_id: 1,
      number_of_stars: 5
    }
  },
  bookings: {
    1: {
      user_id: 1,
      place_id: 1,
      check_in_date: 11/1/2016,
      check_out_date: 11/3/2016,
      number_of_guests: 14
    }
  },
  users: {
    1: {
      name: "Cersei Lannister",
      username: "queenC",
      profile_description: "I kill everyone",
      image_url: "",
      house: "Lannister"
    }
  }  
}
```
