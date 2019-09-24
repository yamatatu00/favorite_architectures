class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  with_options presence: true do
    validates :name
    validates :email
    validates_uniqueness_of :name
    validates_uniqueness_of :email
  end
  has_many :products, dependent: :destroy
  has_many :comments, dependent: :destroy
end
