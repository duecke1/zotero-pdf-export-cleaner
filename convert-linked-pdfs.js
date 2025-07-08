// Converts all linked PDF attachments in Zotero to stored attachments
let converted = 0;

let itemIDs = await Zotero.Items.getAllIDs(Zotero.Libraries.userLibraryID);

for (let id of itemIDs) {
  let item = await Zotero.Items.getAsync(id);

  if (
    item.isAttachment() &&
    item.attachmentLinkMode === Zotero.Attachments.LINK_MODE &&
    item.attachmentContentType === "application/pdf"
  ) {
    let parentID = item.getSource();
    let filePath = item.getFilePath();

    if (!filePath) continue;

    await Zotero.Attachments.importFromFile({
      parentItemID: parentID,
      file: filePath,
      title: item.getDisplayTitle()
    });

    await item.eraseTx();
    converted++;
  }
}

return `✅ Converted ${converted} linked PDFs to stored attachments.`;
