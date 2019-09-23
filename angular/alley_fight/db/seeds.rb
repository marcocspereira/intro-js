# frozen_string_literal: true

Fight.destroy_all
Arena.destroy_all
arena_1, arena_2 = Arena.create([
                                  {
                                    name: 'Arena 1',
                                    spectators: 100
                                  },
                                  {
                                    name: 'Arena 2',
                                    spectators: 90
                                  }
                                ])
Fighter.destroy_all
fighter_1, fighter_2, fighter_3, fighter_4 = Fighter.create([
                                                              {
                                                                name: 'Fighter 1',
                                                                strength: 80,
                                                                life: 100
                                                              },
                                                              {
                                                                name: 'Fighter 2',
                                                                strength: 90,
                                                                life: 100
                                                              },
                                                              {
                                                                name: 'Fighter 3',
                                                                strength: 60,
                                                                life: 100
                                                              },
                                                              {
                                                                name: 'Fighter 4',
                                                                strength: 70,
                                                                life: 100
                                                              }
                                                            ])
Weapon.destroy_all
weapon_1, weapon_2,
    weapon_3, weapon_4 = Weapon.create([
                                         {
                                           name: 'Weapon 1',
                                           damage: 80
                                         },
                                         {
                                           name: 'Weapon 2',
                                           damage: 60
                                         },
                                         {
                                           name: 'Weapon 3',
                                           damage: 70
                                         },
                                         {
                                           name: 'Weapon 4',
                                           damage: 50
                                         }
                                       ])
fight_1, fight_2, fight_3,
    fight_4, fight_5, fight_6 = Fight.create([
                                               {
                                                 fighter_1: fighter_1,
                                                 fighter_2: fighter_2,
                                                 weapon_1: weapon_1,
                                                 weapon_2: weapon_2,
                                                 arena: arena_1,
                                                 winner: fighter_1
                                               },
                                               {
                                                 fighter_1: fighter_1,
                                                 fighter_2: fighter_3,
                                                 weapon_1: weapon_2,
                                                 weapon_2: weapon_3,
                                                 arena: arena_2,
                                                 winner: fighter_1
                                               },
                                               {
                                                 fighter_1: fighter_1,
                                                 fighter_2: fighter_4,
                                                 weapon_1: weapon_3,
                                                 weapon_2: weapon_4,
                                                 arena: arena_1,
                                                 winner: fighter_1
                                               },
                                               {
                                                 fighter_1: fighter_2,
                                                 fighter_2: fighter_3,
                                                 weapon_1: weapon_4,
                                                 weapon_2: weapon_2,
                                                 arena: arena_2,
                                                 winner: fighter_2
                                               },
                                               {
                                                 fighter_1: fighter_2,
                                                 fighter_2: fighter_4,
                                                 weapon_1: weapon_2,
                                                 weapon_2: weapon_3,
                                                 arena: arena_1,
                                                 winner: fighter_4
                                               },
                                               {
                                                 fighter_1: fighter_3,
                                                 fighter_2: fighter_4,
                                                 weapon_1: weapon_1,
                                                 weapon_2: weapon_4,
                                                 arena: arena_2,
                                                 winner: fighter_3
                                               }
                                             ])
