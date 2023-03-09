class Page < ActiveRecord::Base  
  # has_many :from_pages, foreign_key: 'from_page_id', class_name: 'Page'
  # has_many :to_pages, foreign_key: 'to_page_id', class_name: 'Page'
  has_many :page_relations
  has_many :from_pages, :through => :page_relations, :foreign_key => 'from_page_id', class_name: 'Page'
  has_many :to_pages, :through => :page_relations, :foreign_key => 'to_page_id', class_name: 'Page'

  def orphaned?
    self.from_pages.empty? && self.to_pages.empty?
  end 
end