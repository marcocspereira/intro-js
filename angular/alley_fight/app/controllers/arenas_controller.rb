# frozen_string_literal: true

class ArenasController < ApplicationController
  def index
    arenas = Arena.all

    render status: :ok, json: arenas
  end

  def show
    arena = Arena.find(params[:id])

    render status: :ok, json: arena
  end

  def create
    arena = Arena.create(arena_params)

    render status: :created, json: arena
  end

  def update
    arena = Arena.find(params[:id])

    if arena.update(arena_params)
      render status: :ok, json: arena
    else
      render status: :unprocessable_entity,
             json: arena.errors
    end
  end

  def destroy
    arena = Arena.find(params[:id])
    arena.destroy

    head :ok
  end

  private

  def arena_params
    params.require(:arena).permit(:name, :spectators)
  end
end
