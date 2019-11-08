FactoryBot.define do
  factory :product do
    title       {Faker::Lorem.word}
    text        {Faker::Lorem.sentence}
    lat         {Faker::Address.latitude}
    lng         {Faker::Address.longitude}
    likes_count {Faker::Number.digit}
    created_at  { Faker::Time.between(from: DateTime.now - 2, to: DateTime.now) }

    user

    after(:build) do |product|
      product.image.attach(io: File.open(Rails.root.join('spec', 'supports', 'assets', 'test-image.png')), filename: 'test-image.png', content_type: 'image/png')
    end
  end
end

