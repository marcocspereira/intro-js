# frozen_string_literal: true

Rails.application.routes.draw do
  resources :arenas
  resources :weapons
  resources :fighters
  resources :fights
end
