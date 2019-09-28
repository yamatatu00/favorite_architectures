class AddDetailsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :lat, :float
    add_column :products, :lng, :float
  end
end
