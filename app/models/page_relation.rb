class PageRelation < ActiveRecord::Base  
  belongs_to :page
  belongs_to :from_page, class_name: 'Page'
  belongs_to :to_page, class_name: 'Page'
end