# == Schema Information
#
# Table name: bookings
#
#  id               :integer          not null, primary key
#  place_id         :integer          not null
#  user_id          :integer          not null
#  check_in_date    :date             not null
#  check_out_date   :date             not null
#  number_of_guests :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :place, :user, :check_in_date, :check_out_date, :number_of_guests, presence: true
  validates :check_in_date, :check_out_date, overlap: { scope: 'place_id',message_content: 'or check out date already has a booking during that time. Please choose others dates.' }
  validate :check_out_date_is_after_check_in_date, on: :create
  belongs_to :place
  belongs_to :user

  def check_out_date_is_after_check_in_date()
    return if check_out_date.blank? || check_in_date.blank?
    if check_out_date < check_in_date
      errors.add(:check_out_date, "cannot be before the check in date")
    end
  end

end
