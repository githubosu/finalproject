class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :color
      t.date :date
      t.time :start
      t.time :end

      t.timestamps
    end
  end
end
