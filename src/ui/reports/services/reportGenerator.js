import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

const generatePDF = (transactions) => {
 
  const doc = new jsPDF(); 
  const rows = [];
  
  const pageCount = doc.internal.getNumberOfPages();

  for(var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text('Page ' + String(i) + ' of ' + String(pageCount),210-20,297-30,null,null,"right");
  }
  var total = transactions.reduce((sum, el) => sum + el.transactionAmount,0);

  var totalAmount = [...rows.map(el => [el.transactionAmount]), 
    [{content: `Total = $ ${total}       `, colSpan: 3,
      styles: { fillColor: [239, 154, 154], halign: "right" }
    }]]
  transactions.forEach((transaction) => {
    const transactionData = [
      format(new Date(transaction.transactionDate), "MMM-dd-yyyy"),
      transaction.withdrawalCategory,
      "$ " + transaction.transactionAmount
    ];
    rows.push(transactionData);
  });
 
  doc.autoTable({
      theme: "grid",
      startY: 35,
      head: [
        [
          {
            content: "CAR",
            colSpan: 3,
            styles: { halign: "center", fillColor: [22, 160, 133] },
          },
        ],
        [
          "Transaction Date",
          "Category",
          "Amount",
        ],
      ],
       body: rows,
       foot: totalAmount,
  });

  doc.save("report.pdf");
};

export default generatePDF;