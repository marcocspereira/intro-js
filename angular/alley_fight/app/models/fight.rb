# frozen_string_literal: true

class Fight < ApplicationRecord
  belongs_to :arena

  belongs_to :fighter_1, class_name: 'Fighter', foreign_key: :fighter_1_id
  belongs_to :fighter_2, class_name: 'Fighter', foreign_key: :fighter_2_id

  belongs_to :weapon_1, class_name: 'Weapon', foreign_key: :weapon_1_id
  belongs_to :weapon_2, class_name: 'Weapon', foreign_key: :weapon_2_id

  belongs_to :winner, class_name: 'Fighter', foreign_key: :winner_id
end
