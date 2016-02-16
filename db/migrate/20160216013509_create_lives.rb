class CreateLives < ActiveRecord::Migration
  def change
    create_table :lives do |t|
      t.json 'character_sheet'

      t.timestamps null: false
    end
  end
end
