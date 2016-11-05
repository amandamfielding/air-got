class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :place_id, null: false
      t.integer :user_id, null: false
      t.date :check_in_date, null: false
      t.date :check_out_date, null: false
      t.integer :number_of_guests, null: false
      t.timestamps null: false
    end
  end
end
