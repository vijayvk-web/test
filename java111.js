const odbc = require('odbc');

async function main() {
  let connection;

  try {
    // Connect using DSN, UID, and PWD
    connection = await odbc.connect('DSN=MyDSN;UID=myuser;PWD=mypass');

    // Execute a query
    const result = await connection.query('SELECT * FROM mytable');

    // Print results
    result.forEach(row => {
      console.log(row);
    });
  } catch (err) {
    console.error('Error:', err);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

main();
