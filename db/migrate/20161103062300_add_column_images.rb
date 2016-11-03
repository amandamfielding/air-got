class AddColumnImages < ActiveRecord::Migration
  def change
    add_column :place_images, :caption, :string
  end
end
