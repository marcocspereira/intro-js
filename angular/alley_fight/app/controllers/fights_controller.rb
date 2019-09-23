# frozen_string_literal: true

class FightsController < ApplicationController
  def index
    fights = Fight.all

    render status: :ok, json: fights
  end

  def show
    fight = Fight.find(params[:id])

    render status: :ok, json: fight
  end

  def create
    fight = Fight.new(fight_params)

    if fight.save
      render status: :created,
             json: fight
    else
      render status: :unprocessable_entity,
             json: fight.errors
    end
  end

  def update
    fight = Fight.find(params[:id])

    if fight.update(fight_params)
      render status: :ok,
             json: fight
    else
      render status: :unprocessable_entity,
             json: fight.errors
    end
  end

  def destroy
    fight = Fight.find(params[:id])

    fight.destroy

    head :ok
  end

  private

  def fight_params
    params.require(:fight)
          .permit(:fighter_1_id, :fighter_2_id, :weapon_1_id, :weapon_2_id,
                  :arena_id, :winner_id)
  end
end
