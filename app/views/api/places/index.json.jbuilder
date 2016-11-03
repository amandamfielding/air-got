@places.each do |place|
  json.set! place.id do
    json.partial! 'place', place: place
  end
end
