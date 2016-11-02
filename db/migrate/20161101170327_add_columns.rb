class AddColumns < ActiveRecord::Migration
  def change
    add_column :users, :about_me, :text
    add_column :users, :allegiance_id, :integer
    remove_column :users, :profile_description
  end
end
