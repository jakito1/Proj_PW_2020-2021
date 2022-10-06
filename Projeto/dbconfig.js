const config = {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    password: '123',
    database: 'CulinariaIPS',
    options: {
        trustedConnection: true,
        enableArithAbort: true
    }
}

module.exports = config;