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

  belongs_to :place
  belongs_to :user
end
