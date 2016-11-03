class CreatePlaceImages < ActiveRecord::Migration
  def change
    create_table :place_images do |t|
      t.integer :place_id, null: false
      t.string :url, null: false
      t.timestamps null: false
    end
  end
end
