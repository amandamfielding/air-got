class AddColumn < ActiveRecord::Migration
  def change
    add_column :regions, :lat, :integer
    add_column :regions, :lng, :integer
  end
end
