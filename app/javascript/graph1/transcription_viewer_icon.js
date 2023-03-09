
/*
  This is displayed in call details as an icon the user clicks on to view 
  render the transcription viewer.
*/
export class TranscriptionViewerIcon extends HTMLElement {
  constructor() {
    super();

  }

  handleClick() {
    
    console.log('xxxx audioPlayers: clicked' )
  }

  connectedCallback() {
    this.innerHTML = `
      <h1>Component 2</h1>
      <i 
        class="fa fa-file-text-o fa-lg view_transcription" 
        title="Click to view transcription"
        style="margin-left:6px;"
        data-callid="123"
      ></i>

    `;

    this.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
  }
}


customElements.define("transcription-viewer-icon", TranscriptionViewerIcon);
