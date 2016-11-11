class Api::RegionsController < ApplicationController

  def index
    if (params[:letters])
      @regions = Region.where("name ILIKE ?", "%#{params[:letters]}%")
    else
      @regions = Region.all
    end
  end
end
