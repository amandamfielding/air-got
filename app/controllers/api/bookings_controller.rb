class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.user = current_user
    if @booking.save
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def update
    @booking = current_user.bookings.find(params[:id])

    if @booking.update(booking_params)
      render 'api/bookings/show'
    else
      render json: @booking.errors.full_messages, status:422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  private
  def booking_params
    params.require(:booking).permit(:place_id, :check_in_date, :check_out_date, :number_of_guests)
  end
end
