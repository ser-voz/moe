

export default (array) => {
    const fs  = require('fs');
    //let data = JSON.stringify(array);
    console.log(data);
    fs.writeFile ("data.json", JSON.stringify(array), function(err) {
            if (err) throw err;
            console.log('complete');
        }
    );
}

