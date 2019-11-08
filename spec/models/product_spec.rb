require 'rails_helper'

describe Product do
  describe '#create' do
    context '保存できる' do
      it "titleとtext、activestorageのimageが存在すれば投稿できる" do
        product = build(:product, lat: nil, lng: nil, likes_count: nil)
        expect(product).to be_valid
      end
    end

    context '保存できない' do
      it "titleがないと保存できない" do
        product = build(:product, title: nil)
        product.valid?
        expect(product.errors[:title]).to include("can't be blank")
      end

      it "textがないと保存できない" do
        product = build(:product, text: nil)
        product.valid?
        expect(product.errors[:text]).to include("can't be blank")
      end

      it "imageがないと保存できない" do
        product = build(:product)
        product.image.purge
        product.valid?
        expect(product.errors[:image]).to include("画像がありません")
      end

      it "user_idがないと保存できない" do
        product = build(:product, user_id: nil)
        product.valid?
        expect(product.errors[:user]).to include("must exist")
      end
    end
  end
end