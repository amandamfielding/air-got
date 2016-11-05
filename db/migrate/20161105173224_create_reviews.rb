class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :place_id, null: false
      t.integer :author_id, null: false
      t.integer :number_of_stars, null: false
      t.text :body
      t.timestamps null: false
    end
  end
end
