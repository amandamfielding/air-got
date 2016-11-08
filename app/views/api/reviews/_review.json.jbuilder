json.extract! review, :id, :place, :author, :body, :rating

json.set! :author_image, review.author.image_url

json.set! :author_name, review.author.name
