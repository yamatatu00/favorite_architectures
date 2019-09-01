class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string      :title       ,null: false
      t.text        :text
      t.timestamps  null: true
    end
  end
end
