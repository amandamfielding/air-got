json.extract! review, :id, :place_id, :body, :rating

json.set! :author_image, review.author.image_url

json.set! :author_name, review.author.name

json.set! :author_username, review.author.username
