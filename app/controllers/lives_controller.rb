class LivesController < ApplicationController
  before_filter :authorize
  def index
    @lives = current_user.lives
  end

  def create
    character_sheet = TravellerCharacterGenerator.new.create_starting_character
    current_user.lives.create(character_sheet: character_sheet) 
    redirect_to '/lives'
  end

  def edit
    @life = current_user.lives.find(params[:id])
  end
end
