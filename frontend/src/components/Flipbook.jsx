/*import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Flipbook = () => {
  return (
    <div className="flipbook-wrapper">
      <div className="pdf-viewer-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer fileUrl="/pdfs/Portfolio.pdf" />
        </Worker>
      </div>
    </div>
  );
};

export default Flipbook;*/

import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

const Flipbook = () => {
    const pageNavigationPluginInstance = pageNavigationPlugin();
    const { jumpToNextPage, jumpToPreviousPage } = pageNavigationPluginInstance;

    return (
        <div>
            <button className="nav-btn left" onClick={jumpToPreviousPage}>&#8592;</button>
            <button className="nav-btn right" onClick={jumpToNextPage}> &#8594;</button>

            <div style={{ height: '800px' }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl="/pdfs/Portfolio.pdf"
                        defaultScale={SpecialZoomLevel.PageFit}
                        plugins={[pageNavigationPluginInstance]}
                    />
                </Worker>
            </div>
        </div>
    );
};
export default Flipbook;