import * as mssql from 'mssql';

class connection {
    public conn;
    //public dbConfig = { "user": "sa", "password": "Onity@123", "server": "IMSEZ-D0187\\SQLEXPRESS", "port": "1433", "requestTimeout": 120000, "database": "quickApp" };
    public dbConfig = { "user": "ptadmin2050@z4v0qdiqrb", "password": "tmp@@2050", "server": "z4v0qdiqrb.database.windows.net", "port": "1433", "requestTimeout": 120000, "database": "nodejsapp", "options": { "encrypt": true } };

    constructor() {
        this.getConnection();
    }

    private getConnection() {
        console.log(this.dbConfig);
        console.log("Connection String Loaded...");
        this.conn = mssql.connect(this.dbConfig, function (err) {
            if (err)
                throw err;
        });
    }
}

export default new connection().conn; 