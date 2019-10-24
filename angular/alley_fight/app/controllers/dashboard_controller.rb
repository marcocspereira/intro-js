# frozen_string_literal: true

class DashboardController < ApplicationController
  def nr_of_fights_by_arenas
    fight_list = Arena.joins(:fights).group(:name).count

    render status: :ok, json: fight_list
  end

  def most_victorious_fighter
    fighter = Fighter.joins(:fights_won)
                     .group(:name)
                     .select("#{Fighter.table_name}.name, COUNT(name) as victories")
                     .order(victories: :desc)
                     .first.attributes

    render status: :ok, json: fighter
  end

  def fighter_with_more_losses
    fighter = Fight.joins(:fighter_1)
                   .joins(:fighter_2)
                   .joins(:winner)
                   .select('IF(fighters.id = winners_fights.id, fighter_2s_fights.name, fighters.name) as name, COUNT(*) as total_fights')
                   .group('name')
                   .order(total_fights: :desc).last

    render status: :ok, json: { fighter.name => fighter.total_fights }
  end

  def most_chosen_weapon
    weapon = Weapon.select('name, COUNT(*) as total_uses')
                   .joins("INNER JOIN #{Fight.table_name} AS fights ON weapons.id = fights.weapon_1_id OR weapons.id = fights.weapon_2_id")
                   .group(:name)
                   .order(total_uses: :desc)
                   .first

    render status: :ok, json: { weapon.name => weapon.total_uses }
  end

  def most_dangerous_weapon
    weapon = Fight.joins(:fighter_1)
                  .joins(:fighter_2)
                  .joins(:winner)
                  .joins(:weapon_1)
                  .joins(:weapon_2)
                  .select
                  .group('name')
                  .order(total_uses: :desc)
                  .first
    render status: :ok, json: { weapon.name => weapon.total_uses }
  end
end
