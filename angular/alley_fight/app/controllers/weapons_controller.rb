# frozen_string_literal: true

class WeaponsController < ApplicationController
  def index
    weapons = Weapon.all

    render status: :ok, json: weapons
  end

  def show
    weapon = Weapon.find(params[:id])

    render status: :ok, json: weapon
  end

  def create
    weapon = Weapon.create(weapon_params)

    render status: :ok, json: weapon
  end

  def update
    weapon = Weapon.find(params[:id])

    if weapon.update(weapon_params)
      render status: :ok, json: weapon
    else
      render status: :unprocessable_entity,
             json: weapon.errors
    end
  end

  def destroy
    weapon = Weapon.find(params[:id])
    weapon.destroy

    head :ok
  end

  private

  def weapon_params
    params.require(:weapon).permit(:name, :damage)
  end
end
