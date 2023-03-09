// import Graph from "graphology.umd.min";
// let timeline = require("../vendor/graphology.min");
import Sigma from "sigma";
import Page from "./page"

/*
  This is displayed in call details as an icon the user clicks on to view 
  render the transcription viewer.
*/
export class GraphViewer extends HTMLElement {
  constructor() {
    super();

  }

  handleClick() {
    
    console.log('xxxx audioPlayers: clicked' )
  }

  async connectedCallback() {

const RED = "#FA4F40";
const BLUE = "#727EE0";
const GREEN = "#5DB346";
const BLACK = "#333333";

    const data = await this.getPages();
    const graph = new Graph();
    const pageArray = [];

data.pages.forEach((pageItem) => {
  const page = new Page(pageItem)
  pageArray.push(page)
  const size = page.isOrphaned() ? 7 : 15;
  const color = page.isOrphaned() ? BLACK : RED;
  graph.addNode(page.id, { size: size, label: page.name, color: color });
})


data.relations.forEach((relation) => {
  // const page = new Page(pageItem)
  // pageArray.push(page)
  // const size = page.isOrphaned() ? 7 : 15;
  // const color = page.isOrphaned() ? BLACK : RED;
  // if (relation.from_page_id !== null) {
  //   graph.addEdge(relation.page_id, relation.from_page_id, { type: "arrow", label: `from page ${relation.from_page_id}`, size: 5 });
  // }

  if (relation.to_page_id !== null) {
    graph.addEdge(relation.page_id, relation.to_page_id, { type: "arrow", label: `to page ${relation.to_page_id}`, size: 5 });
  }

})


// graph.addNode("John", { size: 15, label: "John", color: RED });
// graph.addNode("Mary", { size: 15, label: "Mary", color: RED });
// graph.addNode("Suzan", { size: 15, label: "Suzan", color: RED });
// graph.addNode("Nantes", { size: 15, label: "Nantes", color: BLUE });
// graph.addNode("New-York", { size: 15, label: "New-York", color: BLUE });
// graph.addNode("Sushis", { size: 7, label: "Sushis", color: GREEN });
// graph.addNode("Falafels", { size: 7, label: "Falafels", color: GREEN });
// graph.addNode("Kouign Amann", { size: 7, label: "Kouign Amann", color: GREEN });

// graph.addEdge("John", "Mary", { type: "line", label: "works with", size: 5 });
// graph.addEdge("Mary", "Suzan", { type: "line", label: "works with", size: 5 });
// graph.addEdge("Mary", "Nantes", { type: "arrow", label: "lives in", size: 5 });
// graph.addEdge("John", "New-York", { type: "arrow", label: "lives in", size: 5 });
// graph.addEdge("Suzan", "New-York", { type: "arrow", label: "lives in", size: 5 });
// graph.addEdge("John", "Falafels", { type: "arrow", label: "eats", size: 5 });
// graph.addEdge("Mary", "Sushis", { type: "arrow", label: "eats", size: 5 });
// graph.addEdge("Suzan", "Kouign Amann", { type: "arrow", label: "eats", size: 5 });

graph.nodes().forEach((node, i) => {
  const angle = (i * 2 * Math.PI) / graph.order;
  graph.setNodeAttribute(node, "x", 100 * Math.cos(angle));
  graph.setNodeAttribute(node, "y", 100 * Math.sin(angle));
});



    this.innerHTML = `
      <style>
        html,
        body,
        #graph-container {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      </style>    
      <h1>Graph Viewer</h1>
      <i 
        class="fa fa-file-text-o fa-lg view_transcription" 
        title="Click to view transcription"
        style="margin-left:6px;"
        data-callid="123"
      ></i>
      <div id='graph-container'></div>

    `;

    const container = document.getElementById("graph-container");
    const renderer = new Sigma(graph, container, {
      renderEdgeLabels: true,
    });


// Create the spring layout and start it:
// const layout = new ForceSupervisor(graph);
// layout.start();

    this.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
  }

  async getPages() {
    let pages = [];
    try {
      const resp = await fetch(`/pages/all`);
      pages = await resp.json();
      console.log("[getPages] " + JSON.stringify(pages))
    }
    catch(err) {
      console.log(`[getPages] Error: ${err}`)
    }

    return pages;
  }
}


customElements.define("graph-viewer", GraphViewer);
