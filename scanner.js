const { fetchTransactions } = require("./transactions");
const { analyzeApprovals } = require("./tokenAnalyzer");

async function scanWallet(address) {
  const transactions = await fetchTransactions(address);
  const approvals = analyzeApprovals(transactions);

  const riskLevel = approvals.risky.length > 2 ? "High" : "Medium";

  return {
    address,
    transactionCount: transactions.length,
    riskyApprovals: approvals.risky.length,
    safeApprovals: approvals.safe.length,
    riskLevel
  };
}

module.exports = { scanWallet };
