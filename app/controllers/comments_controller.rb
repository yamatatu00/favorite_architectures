class CommentsController < ApplicationController
  before_action :authenticate_user!
  
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @new_comment = {name: @comment.user.name, comment: @comment.comment}
      render :json => @new_comment
    else
      redirect_to  product_path(@comment.product.id)
    end
  end

  private
  def comment_params
    params.permit(:comment, :product_id).merge(user_id: current_user.id)
  end
end
