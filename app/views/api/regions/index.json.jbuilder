@regions.each do |region|
  json.set! region.id do
    json.partial! 'region', region: region
  end
end
