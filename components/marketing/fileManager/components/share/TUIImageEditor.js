import React, { useState, useEffect, useRef } from "react";
import TuiImageEditor from "tui-image-editor";

import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";

import styleTUI from './TUIImageEditor.module.css'

class ImageEditor extends React.Component {
  rootEl = React.createRef();
  imageEditorInst = null;

  componentDidMount() {
    this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
      ...this.props
    });
  }

  componentWillUnmount() {
    // this.unbindEventHandlers();
    this.imageEditorInst.destroy();
    this.imageEditorInst = null;
  }

  render() {
    return <div ref={this.rootEl} />;
  }
}

export default function TUIImageEditor({closeEditor}) {
  const props = {
    includeUI: {
      loadImage: {
        path: 'img/sampleImage.jpg',
        name: 'SampleImage',
      },
      menu: ["shape", "filter", "text", "crop"],
      initMenu: "filter",
      uiSize: {
        width: "1100px",
        height: "700px"
      },
      menuBarPosition: "bottom"
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70
    }
  };

  return (
    <>
      <span className={styleTUI.gh_containerStyleTUISpan}></span>
      
      <div className={styleTUI.gh_containerStyleTUIDiv}>
        <i 
          onClick={closeEditor}
          className="bi bi-x-square-fill"
                ></i>
        <ImageEditor {...props} />
      </div>
    </>
  );
}