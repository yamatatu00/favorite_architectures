class CommentsController < ApplicationController
  def create
  
    comment = Comment.create(comment: comment_params[:comment], product_id: comment_params[:product_id], user_id: current_user.id)
    redirect_to "/products/#{comment.product.id}"
    
  end

  private
  def comment_params
    params.permit(:comment, :product_id)
  end
end
