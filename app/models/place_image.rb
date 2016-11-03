# == Schema Information
#
# Table name: place_images
#
#  id         :integer          not null, primary key
#  place_id   :integer          not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PlaceImage < ActiveRecord::Base
  validates :place, :url, presence: true
  belongs_to :place
end
