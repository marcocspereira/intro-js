# frozen_string_literal: true

class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name
      t.integer :damage

      t.timestamps
    end
  end
end
