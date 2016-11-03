class Api::PlaceImagesController < ApplicationController
  def index
    @place_images = PlaceImage.all
  end
end
