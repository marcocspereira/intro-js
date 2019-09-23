# frozen_string_literal: true

class CreateArenas < ActiveRecord::Migration[5.2]
  def change
    create_table :arenas do |t|
      t.string :name
      t.integer :spectators

      t.timestamps
    end
  end
end
