# == Schema Information
#
# Table name: regions
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  lat        :integer
#  lng        :integer
#

class Region < ActiveRecord::Base
  validates :name, :image_url, presence: true
  has_many :places
end
