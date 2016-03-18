class RenameLifeToCharacter < ActiveRecord::Migration
  def change
    rename_table :lives, :characters
  end
end
