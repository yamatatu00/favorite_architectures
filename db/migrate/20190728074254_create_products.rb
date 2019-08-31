class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string      :title
      t.text        :text
      t.text        :image
      t.timestamps  null: true
    end
  end
end
