class Api::AllegiancesController < ApplicationController
  def index
    @allegiances = Allegiance.all
  end
end
