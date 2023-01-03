export const downloadData = (data, name) => {
    let text = JSON.stringify(data);
    let a = document.createElement("a");
    let file = new Blob([text], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = `${name}.json`;
    a.click();
}