# frozen_string_literal: true

class CreateFighters < ActiveRecord::Migration[5.2]
  def change
    create_table :fighters do |t|
      t.string :name
      t.integer :life
      t.string :strength

      t.timestamps
    end
  end
end
