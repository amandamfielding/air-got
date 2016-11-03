Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :regions, only: [:index]
    resources :allegiances, only: [:index]
    resources :places
    resources :place_images, only: [:index]
  end
  root "static_pages#root"
end
