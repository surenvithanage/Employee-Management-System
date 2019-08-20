const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM customer', (err, customers) => {
     if (err) {
      return res.json(err);
     } else {
      return res.json(customers);
     }
    });
  });
};

controller.save = (req, res) => {
  console.log(req.body.firstname);
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO customer set ?', data, (err, customer) => {
      if (err) {
        return res.json(err);
       } else {
        return res.json(customer);
       }
    });
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      if (err) {
        return res.json(err);
       } else {
        return res.json(rows[0]);
       }
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
    if (err) {
      return res.json(err);
     } else {
      return res.json(rows[0]);
     }
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
      if (err) {
        return res.json(err);
       } else {
        return res.json(rows[0]);
       }
    });
  });
}

module.exports = controller;
