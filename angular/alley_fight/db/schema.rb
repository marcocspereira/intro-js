# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_190_916_142_841) do
  create_table 'arenas', options: 'ENGINE=InnoDB DEFAULT CHARSET=utf8', force: :cascade do |t|
    t.string 'name'
    t.integer 'spectators'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'fighters', options: 'ENGINE=InnoDB DEFAULT CHARSET=utf8', force: :cascade do |t|
    t.string 'name'
    t.integer 'life'
    t.string 'strength'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'fights', options: 'ENGINE=InnoDB DEFAULT CHARSET=utf8', force: :cascade do |t|
    t.bigint 'fighter_1_id'
    t.bigint 'fighter_2_id'
    t.bigint 'weapon_1_id'
    t.bigint 'weapon_2_id'
    t.bigint 'arena_id'
    t.bigint 'winner_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['arena_id'], name: 'index_fights_on_arena_id'
    t.index ['fighter_1_id'], name: 'index_fights_on_fighter_1_id'
    t.index ['fighter_2_id'], name: 'index_fights_on_fighter_2_id'
    t.index ['weapon_1_id'], name: 'index_fights_on_weapon_1_id'
    t.index ['weapon_2_id'], name: 'index_fights_on_weapon_2_id'
    t.index ['winner_id'], name: 'index_fights_on_winner_id'
  end

  create_table 'weapons', options: 'ENGINE=InnoDB DEFAULT CHARSET=utf8', force: :cascade do |t|
    t.string 'name'
    t.integer 'damage'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'fights', 'arenas'
  add_foreign_key 'fights', 'fighters', column: 'fighter_1_id'
  add_foreign_key 'fights', 'fighters', column: 'fighter_2_id'
  add_foreign_key 'fights', 'fighters', column: 'winner_id'
  add_foreign_key 'fights', 'weapons', column: 'weapon_1_id'
  add_foreign_key 'fights', 'weapons', column: 'weapon_2_id'
end
