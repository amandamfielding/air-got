class Api::RegionsController < ApplicationController

  def index
    @regions = Region.all
  end
end
