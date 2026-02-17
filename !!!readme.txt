At the beginning of the file "server.js", a line:
    "require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);"
 was added that resolves the error in the terminal:
    "querySrv ECONNREFUSED _mongodb._tcp.cluster0.ssfgew9.mongodb.net
    [nodemon] app crashed - waiting for file changes before starting..."
It forcibly indicates which DNS servers (containing domain names) the node should contact. 
It seems that the problem is with the provider's DNS servers or with the router. 
The specified servers are secure servers. The second is the Google server.