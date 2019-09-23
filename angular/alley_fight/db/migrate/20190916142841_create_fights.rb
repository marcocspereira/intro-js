# frozen_string_literal: true

class CreateFights < ActiveRecord::Migration[5.2]
  def change
    create_table :fights do |t|
      t.bigint :fighter_1_id
      t.bigint :fighter_2_id
      t.bigint :weapon_1_id
      t.bigint :weapon_2_id
      t.references :arena, foreign_key: true
      t.bigint :winner_id

      t.timestamps
    end

    add_foreign_key :fights, :fighters, column: :fighter_1_id
    add_index :fights, :fighter_1_id
    add_foreign_key :fights, :fighters, column: :fighter_2_id
    add_index :fights, :fighter_2_id

    add_foreign_key :fights, :weapons, column: :weapon_1_id
    add_index :fights, :weapon_1_id
    add_foreign_key :fights, :weapons, column: :weapon_2_id
    add_index :fights, :weapon_2_id

    add_foreign_key :fights, :fighters, column: :winner_id
    add_index :fights, :winner_id
  end
end
