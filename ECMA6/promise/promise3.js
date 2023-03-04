var result = [];

// var getChat = new Promise((resolve, reject)=> {
//     resolve();
// });

var getDBConnection = ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("Getting DB connection!");
            var res = {};
            res["DBConnection"]="connection object";
            resolve(res);
        }, 1000)
    });
}

var executeQuery = (res)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            result = ["Apple", "Mango"];
            res["result"]=result;
            console.log("Query Executed!");
            resolve(res);
        }, 2000);
    });
}

var closeDBConnection = (res)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("DB connection closed!");
            res["isDBConnectionClosed"]=true;
            resolve(res);
        }, 1000)
    });
}

var retrieveChat = new Promise((resolve, reject)=> {
    getDBConnection().then((res)=> {
        return executeQuery(res)
    })
    .then((res)=> {
        return closeDBConnection(res)
    })
    .then((res)=> {
        resolve(res);
    });
});

retrieveChat.then(res=> {
    console.log(res);
})
