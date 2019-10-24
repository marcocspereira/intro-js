# frozen_string_literal: true

class FightersController < ApplicationController # :nodoc:
  def index
    fighters = if name
                 Fighter.where('name like ?', "%#{name}%")
               else
                 Fighter.all
               end

    render status: :ok,
           json: fighters
  end

  def show
    fighter = Fighter.find(params[:id])

    render status: :ok,
           json: fighter
  end

  def create
    fighter = Fighter.new(fighter_params)

    if fighter.save
      render status: :created,
             json: fighter
    else
      render status: :unprocessable_entity,
             json: fighter.errors
    end
  end

  def update
    fighter = Fighter.find(params[:id])

    if fighter.update(fighter_params)
      render status: :ok, json: fighter
    else
      render status: :unprocessable_entity,
             json: fighter.errors
    end
  end

  def destroy
    fighter = Fighter.find(params[:id])

    if fighter.destroy
      render status: :ok
    else
      render status: :unprocessable_entity,
             json: fighter.errors
    end
  end

  private

  def fighter_params
    params.require(:fighter).permit(:name, :strength, :life)
  end

  def name
    params.permit('name')['name']
  end
end
