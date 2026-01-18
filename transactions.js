async function fetchTransactions(address) {
  return [
    { hash: "0xA1", to: "0xSafeContract", value: 0.4 },
    { hash: "0xB2", to: "0xSafeContract", value: 1.1 },
    { hash: "0xC3", to: "0xSuspiciousContract", value: 3.9 }
  ];
}

module.exports = { fetchTransactions };
