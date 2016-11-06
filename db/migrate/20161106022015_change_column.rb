class ChangeColumn < ActiveRecord::Migration
  def change
    rename_column :reviews, :number_of_stars, :rating
  end
end
