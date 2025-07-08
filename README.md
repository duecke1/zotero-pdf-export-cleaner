# zotero-pdf-export-cleaner
Convert linked PDFs to stored attachments in Zotero and export clean folders on Mac 
# Zotero PDF Export Cleaner (for Mac)

This project solves a common frustration for Mac users working with Zotero and ZotFile:

> “Why are all my PDFs saved in random folders with meaningless names like `344` and `R45D8K`, and why can't I just get them all into one clean folder?”

---

## 🧠 Background: Why This Exists

When I was trying to export my Zotero library on my MacBook, I expected to get a clean set of PDFs with readable filenames.

Instead, I got:
- Hundreds of PDFs stored inside **random subfolders**
- File names like `344.pdf`, `882.pdf`, etc.
- No idea what each file was unless I opened it
- **ZotFile wasn't moving the files**, even after renaming them properly

After trial and error, I realized that:
- **ZotFile cannot move linked files**, only “stored” ones
- Zotero saves PDFs into **internal folders** that aren’t user-friendly
- Most Zotero export options don’t give you just the PDFs — let alone well-named ones

So I built this workflow to:
1. Convert all **linked PDFs** to **stored** format
2. Move all stored PDFs into one clean folder
3. Let you reuse this anytime (including by collection)

---

## 🔧 What This Project Does

- ✅ Converts **linked PDFs** to **stored attachments**
- ✅ Lets **ZotFile** actually rename and move those PDFs
- ✅ Copies all **stored PDFs** into a clean folder on your Desktop
- ✅ Works on **macOS**, including with Zotero 7+

---

## 🧰 What You Need

Before using this project:

1. **Install Zotero**: [https://zotero.org](https://zotero.org)
2. **Install ZotFile**: [https://zotfile.com](https://zotfile.com)
   - ZotFile is a Zotero plugin that renames and organizes attachments
   - After installing, go to Zotero → Preferences → ZotFile and:
     - Set a custom folder to save your PDFs
     - Choose a rename format like `[%a]_[%y]_[%t]`(author, year, title)

---

## 📁 Files in This Repo

### `convert-linked-pdfs.js`
- A JavaScript script you run inside Zotero
- Converts all **linked PDFs** to **stored attachments**
- Makes them compatible with ZotFile + export scripts

### `export-clean-pdfs.sh`
- A Terminal script that:
  - Finds all PDFs in your Zotero storage
  - Copies them into a clean folder on your Desktop:  
    `~/Desktop/ZoteroPDFsClean`
- Great for combining PDFs or archiving your research

---

## 🚀 How to Use This

### Step 1: Convert Linked PDFs to Stored

1. In Zotero, go to:
   `Tools → Developer → Run JavaScript`
2. Paste the contents of `convert-linked-pdfs.js`
3. Click **Run**

You should see something like:
✅ Converted 38 linked PDFs to stored attachments.

---

### Step 2: Export Clean PDFs to Your Desktop

1. Open **Terminal** (⌘ + Space → type `Terminal`)
2. Run the script by pasting this:

```bash
mkdir -p ~/Desktop/ZoteroPDFsClean && find ~/Zotero/storage -name "*.pdf" -exec cp "{}" ~/Desktop/ZoteroPDFsClean \;
