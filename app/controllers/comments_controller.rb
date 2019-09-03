class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    redirect_to  product_path(@comment.product.id)
  end

  private
  def comment_params
    params.permit(:comment, :product_id).merge(user_id: current_user.id)
  end
end
