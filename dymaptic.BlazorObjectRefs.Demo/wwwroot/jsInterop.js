export function getQuill(containerId, dotNetRef, options) {
    let quill = new Quill(`#${containerId}`, options);
    let Delta = Quill.import('delta');
    let change = new Delta();
    quill.on('text-change', (delta) => {
        change = change.compose(delta);
        dotNetRef.invokeMethodAsync('JsTextChanged', change);
    })
    
    return quill;
}