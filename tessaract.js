const { createWorker } = require('tesseract.js');

const worker = createWorker({
    // logger: m => console.log(m)
});

(async () => {
await worker.load();
await worker.loadLanguage('eng');
await worker.initialize('eng');


const startTime = new Date();

const { data: { text: text1 } } = await worker.recognize('./images/hexagon-all.png');
console.log(text1);

const { data: { text: text3 } } = await worker.recognize('./images/hexagon-table2.png');
console.log(text3);

const totalOCRTime = new Date() - startTime;
console.log('Total OCR Time:', totalOCRTime);

await worker.terminate();
})();


// https://github.com/tesseract-ocr/tesseract/wiki/ImproveQuality
// https://stackoverflow.com/questions/9480013/image-processing-to-improve-tesseract-ocr-accuracy
