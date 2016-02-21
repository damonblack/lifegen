class TravellerCharacterGenerator
  ATTRIBUTES = [ 
    :STR, 
    :DEX, 
    :END, 
    :INT, 
    :EDU,
    :SOC
  ]

  def create_starting_character 
    character_sheet = {}
    character_sheet[:age] = 18
    roll_attributes(character_sheet)
  end

  def roll_attributes(character_sheet={})
    character_sheet[:attributes] ||= {}
    ATTRIBUTES.each do |attribute|
      character_sheet[:attributes][attribute] = roll_d6 + roll_d6
    end
    character_sheet 
  end

  def roll_d6
    1 + rand(6)
  end
end
