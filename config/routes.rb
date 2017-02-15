Rails.application.routes.draw do
  devise_for :users
  root to: 'site#index'
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
  get :login, to: 'site#index'
  get :signup, to: 'site#index'
  get :page1, to: 'site#index'
end
