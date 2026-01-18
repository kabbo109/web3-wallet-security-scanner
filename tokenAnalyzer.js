function analyzeApprovals(transactions) {
  const risky = [];
  const safe = [];

  transactions.forEach(tx => {
    if (tx.to.toLowerCase().includes("suspicious")) {
      risky.push(tx);
    } else {
      safe.push(tx);
    }
  });

  return { risky, safe };
}

module.exports = { analyzeApprovals };
