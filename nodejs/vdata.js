vdata= require ('vdatashj');
const fs = require('fs');
var vswdecode = function (f) {
       var ab= fs.readFileSync(f);
       let reader = new  vdata.VDataByteReader(ab);
       let vreader = new  vdata.VDataReader([reader]);
       let frame = vreader.df();
       let vals = frame.objects();
       let cols = frame.cols(true);
       
       console.log(cols);
       return cols;
}
module.exports={ vswdecode};
