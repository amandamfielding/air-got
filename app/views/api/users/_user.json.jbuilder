json.extract! user, :id, :username, :name, :image_url, :about_me, :allegiance_id, :places

if user.allegiance
json.set! :flag_image_url, user.allegiance.flag_image_url
end
