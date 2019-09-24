require 'rails_helper'

RSpec.describe Arena, type: :model do

  describe 'given a valid instance of Arena' do
    let(:arena) { described_class.new(name: 'ze', spectators: 3) }

    it 'is valid' do
      expect(arena).to be_valid
    end

    it 'validates the presence of the :name attribute' do
      arena.name = nil

      expect(arena).not_to be_valid
    end

    it 'validates the uniqueness of the :name attribute' do
      described_class.create(name: arena.name, spectators: 3)

      expect(arena).not_to be_valid
    end

    it 'validates the uniqueness of the :spectators attribute' do
      described_class.create(name: arena.name, spectators: arena.spectators)

      expect(arena).not_to be_valid
    end
  end

end
