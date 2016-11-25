class Api::PlacesController < ApplicationController

  def index
    @places = bounds ? Place.in_bounds(bounds) : Place.all
    if (params[:maxPrice])
      @places = @places.where("price_per_night < ?",params[:maxPrice])
    end
    render :index
  end

  def show
    @place = Place.find(params[:id])
  end

  private

  def bounds
    params[:bounds]
  end
end
