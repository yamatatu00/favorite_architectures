Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'products#index'
  post   '/like/:product_id' => 'likes#like',   as: 'like'
  delete '/like/:product_id' => 'likes#unlike', as: 'unlike'
  resources :works, only: :index do
    collection  do
      get 'image_recognition'
    end
  end
  resources :users, only: :show
  resource :contacts, only: [:new, :create]
  resources :products do
    resources :comments, only: [:create]
  end

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end
end
