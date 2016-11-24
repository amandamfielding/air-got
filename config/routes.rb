Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :regions, only: [:index]
    resources :allegiances, only: [:index]
    resources :places do
      resources :reviews, only: [:index]
    end
    resources :place_images, only: [:index]
    resources :reviews, only: [:create,:destroy]
    resources :bookings, only: [:index,:create,:update,:destroy]
  end
  root "static_pages#root"
end
