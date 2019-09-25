class UsersController < ApplicationController
  def show
    @name = current_user.name
    @products = Product.where(user_id:current_user.id).page(params[:page]).per(12).order("created_at DESC")
  end
end
