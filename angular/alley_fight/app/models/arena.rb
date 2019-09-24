# frozen_string_literal: true

class Arena < ApplicationRecord # :nodoc:
  has_many :fights

  validates(:name, presence: true, uniqueness: true)
  validates(:spectators, presence: true, uniqueness: true)
end
