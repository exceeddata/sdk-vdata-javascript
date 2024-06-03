vsw=require("../vdata.js");

test('simple decode test', () => {
    vsw.vswdecode('/Users/garyshi/Documents/gitwork/vdatashj/diff_freq_0.vsw');
    expect(true).toBe(true);
});
