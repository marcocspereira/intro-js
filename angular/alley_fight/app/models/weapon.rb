# frozen_string_literal: true

class Weapon < ApplicationRecord
  has_many :fights_as_weapon_1, class_name: 'Fight', foreign_key: :weapon_1_id
  has_many :fights_as_weapon_2, class_name: 'Fight', foreign_key: :weapon_2_id
end
