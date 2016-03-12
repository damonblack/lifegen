class LivesController < ApplicationController
  before_filter :authorize

  def index
    @lives = current_user.lives
  end

  def create
    character_sheet = TravellerCharacterGenerator.new.create_starting_character
    current_user.lives.create(character_sheet: character_sheet)
    @lives = current_user.lives
  end

  def update
    if life = current_user.lives.find(params[:id])
      life.character_sheet['name'] = life_params[:characterSheet][:name]
      life.save!
    end

    render json: "Character updated", status: 200
  end

  def destroy
    if life = current_user.lives.find(params[:id])
      life.destroy!
    end

    @lives = current_user.lives
  end

  def edit
    @life = current_user.lives.find(params[:id])
  end

  private

  def life_params
    params.require(:life).permit(characterSheet: [:name])
  end
end
