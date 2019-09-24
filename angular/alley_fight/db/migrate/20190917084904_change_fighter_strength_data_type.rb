# frozen_string_literal: true

class ChangeFighterStrengthDataType < ActiveRecord::Migration[5.2]
  def up
    change_column :fighters, :strength, :integer
  end

  def down
    change_column :fighters, :strength, :string
  end
end
