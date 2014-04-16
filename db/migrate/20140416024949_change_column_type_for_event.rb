class ChangeColumnTypeForEvent < ActiveRecord::Migration
  def change
  	change_column :events, :start, :datetime
  	change_column :events, :end, :datetime
  	add_column :events, :allday, :boolean, default: false 
  end
end
