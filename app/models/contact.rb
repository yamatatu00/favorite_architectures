class Contact < ApplicationRecord
  validates :email, presence: true, length: {maximum:255},
            format: {with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: "英文字のみが使えます" }
  with_options presence: true do
    validates :name
    validates :message
  end
end
