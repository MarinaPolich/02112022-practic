import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const entry = document.querySelector('#modal-root');

export class Modal extends Component {
  render() {
    return createPortal(
      <div className="Overlay">
        <div className="ModalBox">
          <img src={this.props.url} alt="coctails" />
          <button onClick={this.props.onClose} type="button" className="Btn">
            Close
          </button>
        </div>
      </div>,
      entry
    );
  }
}
