class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :color
      t.string :start
      t.string :end

      t.timestamps
    end
  end
end
