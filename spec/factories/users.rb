FactoryBot.define do

  factory :user do
    # name                  {"hoge"}
    # email                 {"hoge@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
    sequence(:name) {Faker::Base.regexify("[a-z]{6}")}
    sequence(:email) {Faker::Internet.email}
  end
end