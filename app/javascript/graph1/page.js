export default class Page {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.text = data.text;
    this.from_pages = [];
    this.to_pages = [];

    console.log("name: " + this.name)
    console.log("label: " + this.text)

  }

  addFromPage(pageId){
    this.from_pages.push( pageId );
  }

  addToPage(pageId){
    this.to_pages.push( pageId );
  }
  
  isOrphaned(){
    return (this.from_pages.length === 0 && this.to_pages.length === 0)
  }
}