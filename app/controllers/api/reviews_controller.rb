class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.author = current_user
    if @review.save
      render "api/reviews/show"
    else
      render json: @review.errors.full_messages, status:422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :place_id, :rating)
  end
end
