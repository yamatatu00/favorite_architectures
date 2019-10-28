class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :products, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :like_stories, through: :likes, source: :product

  validates :name , presence: true, uniqueness: true, length: { maximum: 6 } 
  validates :email, presence: true, uniqueness: true
  
end
