class Product < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liking_users, through: :likes, source: :user
  
  validate :check_file_presence
  with_options presence: true do
    validates :title
    validates :text
  end

  def check_file_presence
    errors.add(:image, "画像がありません") unless image.attached?
  end
end