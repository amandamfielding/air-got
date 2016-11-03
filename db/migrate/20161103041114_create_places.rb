class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.text :description
      t.integer :price_per_night, null: false
      t.integer :region_id, null: false
      t.integer :number_rooms, null: false
      t.integer :number_beds
      t.integer :max_guests, null: false
      t.string :property_type
      t.text :house_rules
      t.integer :allegiance_id
      t.integer :stars
      t.timestamps null: false
    end
  end
end
