// src/Components/PdfViewer.jsx
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Use pdfjs-dist that react-pdf depends on
import * as pdfjsLib from 'pdfjs-dist';

// Sync the worker version with the library version
pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

export default function PdfViewer({ file }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[1440px] max-w-full">
        <Document file={file}>
          <Page
            pageNumber={1}
            width={1440}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
