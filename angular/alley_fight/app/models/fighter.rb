# frozen_string_literal: true

class Fighter < ApplicationRecord
  has_many :fights_as_fighter_1, class_name: 'Fight', foreign_key: :fighter_1_id
  has_many :fights_as_fighter_2, class_name: 'Fight', foreign_key: :fighter_2_id
  has_many :fights_won, class_name: 'Fight', foreign_key: :winner_id

  validates :name, :strength, :life, presence: true
end
