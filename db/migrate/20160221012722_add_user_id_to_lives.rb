class AddUserIdToLives < ActiveRecord::Migration
  def change
    add_column :lives, :user_id, :integer, null: false
  end
end
