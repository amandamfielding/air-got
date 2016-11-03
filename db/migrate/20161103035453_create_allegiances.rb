class CreateAllegiances < ActiveRecord::Migration
  def change
    create_table :allegiances do |t|
      t.string  :house_name, null: false
      t.string :flag_image_url, null: false
      t.timestamps null: false
    end
  end
end
