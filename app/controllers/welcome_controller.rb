class WelcomeController < ApplicationController
  def index
    @lives = Life.all
  end
end
