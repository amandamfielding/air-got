# == Schema Information
#
# Table name: places
#
#  id              :integer          not null, primary key
#  host_id         :integer          not null
#  title           :string           not null
#  lng             :float            not null
#  lat             :float            not null
#  description     :text
#  price_per_night :integer          not null
#  region_id       :integer          not null
#  number_rooms    :integer          not null
#  number_beds     :integer
#  max_guests      :integer          not null
#  property_type   :string
#  house_rules     :text
#  allegiance_id   :integer
#  stars           :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Place < ActiveRecord::Base
  validates :host,:title,:lng,:lat, :price_per_night,:region_id,:number_rooms,:max_guests, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User
  belongs_to :region
  belongs_to :allegiance
  has_many :bookings
  has_many :reviews
  has_many :place_images

end
