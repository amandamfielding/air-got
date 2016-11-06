# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  place_id   :integer          not null
#  author_id  :integer          not null
#  rating     :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :place, :author, :rating, presence: true
  belongs_to :place
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
