import { INInvoiceApi } from "../apis/ininvoice-api";

async function invoicePDF(documentId: number) {
  const InInvoiceApi = new INInvoiceApi();
  const invoice = await InInvoiceApi.iNInvoiceDocumentIDPrintGet(
    documentId,
    "Disk File",
    "",
    "Adobe PDF",
    "",
    "myFileName.pdf",
    "attachment",
    "",
    { responseType: "arraybuffer" }
  );
  const { data } = invoice;
  return data;
}

export class Document {
  static invoicePDF = invoicePDF;
}
