import { type TextSegment } from "components/DeidOutput/utils/parsers";
import jsPDF from "jspdf";

export const useDownloadRedactedTextCopy = () => {
  const segmentsToText = (segments: TextSegment[]): string => {
    return segments.map((seg) => seg.content).join("");
  };

  const downloadAsJson = (segments: TextSegment[], filename: string): void => {
    const text = segmentsToText(segments);
    const jsonString = JSON.stringify({ content: text }, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAsText = (segments: TextSegment[], filename: string): void => {
    const text = segmentsToText(segments);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadAsPdf = (segments: TextSegment[], filename: string): void => {
    const text = segmentsToText(segments);
    const doc = new jsPDF();
    doc.setFontSize(9);
    doc.setFont("courier");
    doc.text(text, 10, 10, { maxWidth: 190 });
    doc.save(`${filename}.pdf`);
  };

  const copyToClipboard = (segments: TextSegment[]): void => {
    const text = segmentsToText(segments);
    navigator.clipboard.writeText(text);
  };

  return { downloadAsJson, downloadAsText, copyToClipboard, downloadAsPdf };
};
