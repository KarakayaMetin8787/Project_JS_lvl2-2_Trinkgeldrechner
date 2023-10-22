function check(){
    const invoice = document.getElementById("sumInvoice");
    const people = document.getElementById("sumPpl");
    const selection = document.getElementById("selection");

    const badOption = selection.querySelector('option[value="0.02"]');
    const midOption = selection.querySelector('option[value="0.1"]');
    const goodOption = selection.querySelector('option[value="0.2"]');

    document.body.querySelector(".sumTip").style.visibility = "visible";
    document.body.querySelector(".sumInvoice").style.visibility = "visible";
    document.body.querySelector(".partTip").style.visibility = "visible";


    if (badOption.selected) {
        const sumTip = invoice.value * 0.02;
        const partTip = sumTip/people.value;
        
        document.body.querySelector(".sumInvoice").textContent = "Gesamtkosten: " + (Number(invoice.value) + Number(sumTip)) + " €";
        document.body.querySelector(".partTip").textContent = "Anteil am Trinkgeld: " + partTip + " €";
        document.body.querySelector(".sumTip").textContent = "Summe vom Trinkgeld: " + sumTip + " €";
    } else if (midOption.selected) {
        const sumTip = invoice.value * 0.1;
        const partTip = sumTip/people.value;
        
        document.body.querySelector(".sumInvoice").textContent = "Gesamtkosten: " + (Number(invoice.value) + Number(sumTip)) + " €";
        document.body.querySelector(".partTip").textContent = "Anteil am Trinkgeld: " + partTip + " €";
        document.body.querySelector(".sumTip").textContent = "Summe vom Trinkgeld: " + sumTip + " €";
    } else if (goodOption.selected) {
        const sumTip = invoice.value * 0.2;
        const partTip = sumTip/people.value;
        
        document.body.querySelector(".sumInvoice").textContent = "Gesamtkosten: " + (Number(invoice.value) + Number(sumTip)) + " €";
        document.body.querySelector(".partTip").textContent = "Anteil am Trinkgeld: " + partTip + " €";
        document.body.querySelector(".sumTip").textContent = "Summe vom Trinkgeld: " + sumTip + " €";
    }
}
