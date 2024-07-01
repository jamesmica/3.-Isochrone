importScripts('https://cdn.sheetjs.com/xlsx-0.20.2/package/dist/xlsx.full.min.js');

self.addEventListener('message', async function(event) {
    const arrayBuffer = event.data;
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });

    // Supposons que les données se trouvent dans la première feuille
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(firstSheet);

    // Envoyer les données traitées au script principal
    self.postMessage(jsonData);
});
