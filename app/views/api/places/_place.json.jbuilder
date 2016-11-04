json.extract! place, :id, :host,:title,:lng,:lat,:description,
:price_per_night,:region_id,:number_rooms,:number_beds,
:max_guests,:property_type,:house_rules,:allegiance_id,:stars

json.place_images place.place_images, partial: 'api/places/place_image', as: :place_image
