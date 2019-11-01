FactoryBot.define do
  factory :user do
    # name                  {"hoge"}
    # email                 {"hoge@gmail.com"}
    # password              {"00000000"}
    # password_confirmation {"00000000"}
    password = Faker::Internet.password(min_length: 8)
    email                 {Faker::Internet.free_email}
    password              {password}
    password_confirmation {password}
    sequence(:name)       {Faker::Base.regexify("[a-z]{6}")}
    # sequence(:email)      {Faker::Internet.email}
  end
end