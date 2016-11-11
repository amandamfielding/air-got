class Api::PlacesController < ApplicationController

  def index
    @places = bounds ? Place.in_bounds(bounds) : Place.all
    render :index
  end

  def show
    @place = Place.find(params[:id])
  end

  def bounds
    params[:bounds]
  end
end
