@allegiances.each do |allegiance|
  json.set! allegiance.id do
    json.partial! 'allegiance', allegiance: allegiance
  end
end
