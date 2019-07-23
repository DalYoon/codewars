const queueTime = (customers, n) => {
  let tills = [];

  const firstCustomers = customers.splice(0, n);
  tills.splice(0, 0, ...firstCustomers);

  customers.forEach(customer => {
    const minTill = tills.indexOf(Math.min(...tills));
    tills[minTill] += customer;
  });

  const maxTill = tills[tills.indexOf(Math.max(...tills))];

  return tills.length === 0 ? 0 : maxTill;
};

export default queueTime;
