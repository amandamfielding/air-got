@place_images.each do |place_image|
  json.set! place_image.id do
    json.partial! 'place_image', place_image: place_image
  end
end
