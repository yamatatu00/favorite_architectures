FactoryBot.define do
  factory :product do
    title       {"test"}
    text        {"hello!"}
    lat         {34.1572726930187}
    lng         {129.276123046875}
    likes_count {1}
    user

    after(:build) do |product|
      product.image.attach(io: File.open(Rails.root.join('spec', 'supports', 'assets', 'test-image.png')), filename: 'test-image.png', content_type: 'image/jpeg')
    end
  end
end

