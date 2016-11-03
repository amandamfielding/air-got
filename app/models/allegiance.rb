# == Schema Information
#
# Table name: allegiances
#
#  id             :integer          not null, primary key
#  house_name     :string           not null
#  flag_image_url :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Allegiance < ActiveRecord::Base
  validates :house_name, :flag_image_url, presence: true
  has_many :users
  has_many :places
end
