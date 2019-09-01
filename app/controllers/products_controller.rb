class ProductsController < ApplicationController
  before_action :move_to_index, except: :index
  #before_action :ausetic_user

  def index
    @products = Product.all.includes(:user).order('id DESC')
    
  end

  def new
    @products = Product.new
  end

  def create
    @products = Product.create(product_params)
  end

  def show
    @product = Product.find(params[:id])
    @comments = @product.comments.includes(:user)
  end


  def destroy
    product = Product.find(params[:id])
    if product.user_id == current_user.id
      product.destroy
    end
  end

  def edit
    @product = Product.find(params[:id])
  end

  def update
    product = Product.find(params[:id])
    if product.user_id == current_user.id
      product.update(product_params)
    end
  end

  
  private
  def product_params
  
    params.require(:product).permit(:title, :image, :text).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
