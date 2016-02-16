class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.json 'sheet'

      t.timestamps null: false
    end
  end
end
