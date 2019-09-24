# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :arenas
  resources :fighters
  resources :weapons
  resources :fights

  namespace :dashboard do
    get 'nr_of_fights_by_arenas'
    get 'most_victorious_fighter'
    get 'fighter_with_more_losses'
    get 'most_chosen_weapon'
    get 'most_dangerous_weapon'
  end
end
