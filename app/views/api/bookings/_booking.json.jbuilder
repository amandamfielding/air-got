json.extract! booking, :id, :check_in_date, :check_out_date, :number_of_guests

json.set! :place_main_image, booking.place.place_images[0].url

json.set! :host_image_url, booking.place.host.image_url

json.set! :host_id, booking.place.host.id

json.set! :region_name, booking.place.region.name

json.set! :place_title, booking.place.title

json.set! :stars, booking.place.stars

json.set! :place_id, booking.place.id
