const url = require('url');
const adr = `http://localhost:8080/default.htm?year=2020&month=july`;

const q = url.parse(adr,true);
console.log(q.host);
console.log(q.pathname);

const qdata = q.query;
console.log(qdata.month);