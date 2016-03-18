require 'test_helper'

class LifeTest < ActiveSupport::TestCase
  test "A character accepts a JSON formatted character sheet" do
    life = Character.new(character_sheet: {
      name: "Bob", 
      level: "2nd", 
      age: 34, 
      attributes: {
        strength: 13,
        dexterity: 11,
        constitution: 17,
        intelligence: 12,
        wisdom: 11,
        charisma: 18

      },
      possessions: [
        'hammer',
        'saw',
        'sword+1'
      ]
    })
    assert life.character_sheet["name"] == "Bob"
  end
end
