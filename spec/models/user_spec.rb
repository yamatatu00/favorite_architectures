require 'rails_helper'

describe User do
  describe '#create' do

    it "nameとemail、passwordとpassword_confirmationが存在すれば登録できる" do
      user = build(:user)
      expect(user).to be_valid
    end

    it "nameが空では登録できない" do
      user = build(:user, name: "")
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")
    end

    it "emailが空では登録できない" do
      user = build(:user, email: "")
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")
    end

    it "passwordが空では登録できない" do
      user = build(:user, password: "")
      user.valid?
      expect(user.errors[:password]).to include("can't be blank")
    end

    it "passwordが存在してもpassword_confirmationが空では登録できない" do
      user = build(:user, password_confirmation: "")
      user.valid?
      expect(user.errors[:password_confirmation]).to include("doesn't match Password")
    end

    it "nameが7文字以上であれば登録できない" do
      user = build(:user, name: "hogehog")
      user.valid?
      expect(user.errors[:name]).to include("is too long (maximum is 6 characters)")
    end

    it "nameが6文字以下では登録できる" do
      user = build(:user, name: "hogeho")
      expect(user).to be_valid
    end

    it "重複したemailが存在する場合登録できない" do
      #はじめにユーザーを登録
      user = create(:user)
      #先に登録したユーザーと同じemailの値を持つユーザーのインスタンスを作成
      another_user = build(:user, email: user.email)
      another_user.valid?
      expect(another_user.errors[:email]).to include("has already been taken")
    end

    it "passwordが6文字以上であれば登録できる" do
      user = build(:user, password: "000000", password_confirmation: "000000")
      expect(user).to be_valid
    end

    it "passwordが5文字以下であれば登録できない" do
      user = build(:user, password: "00000", password_confirmation: "00000")
      user.valid?
      expect(user.errors[:password]).to include("is too short (minimum is 6 characters)")
    end

  end
end