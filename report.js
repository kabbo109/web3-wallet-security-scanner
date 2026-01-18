const fs = require("fs");

function generateReport(address, result) {
  const report = {
    wallet: address,
    network: "Ethereum",
    scannedAt: new Date().toISOString(),
    summary: result
  };

  fs.writeFileSync("wallet_report.json", JSON.stringify(report, null, 2));
  console.log("Report saved as wallet_report.json");
}

module.exports = { generateReport };
