class PagesController < ApplicationController
  def all
    pages = Page.all
    render json: {pages: pages, relations: PageRelation.all}
  end 
end