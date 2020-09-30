function sub(amt1, amt2) {
    let carry = 0;
    let p1 = amt1.split('.')[1], p2 = amt2.split(".")[1];
    let z1 = amt1.split('.')[0], z2 = amt2.split('.')[0];
    if (p1 == undefined) {
        p1 = "00";
    }
    if (p2 == undefined) {
        p2 = "00";
    }
    if (p1.length < 2) {
        p1 += "0";
    }
    if (p2.length < 2) {
        p2 += "0";
    }
    let ans = "";
    let c = 1;
    while (c >= 0) {
        ans = (parseInt(p1[c]) + carry >= parseInt(p2[c]) ? parseInt(p1[c]) + carry - parseInt(p2[c]) :
            parseInt(p1[c]) + carry + 10 - parseInt(p2[c])) + ans;
        carry = parseInt(p1[c]) + carry >= parseInt(p2[c]) ? 0 : -1;
        c -= 1;
    }
    ans = "." + ans;
    c = z1.length - z2.length;
    while (c--) {
        z2 = '0' + z2;
    }
    c = z1.length - 1;
    while (c >= 0) {
        ans = (parseInt(z1[c]) + carry >= parseInt(z2[c]) ? parseInt(z1[c]) + carry - parseInt(z2[c]) :
            parseInt(z1[c]) + carry + 10 - parseInt(z2[c])) + ans;
        carry = parseInt(z1[c]) + carry >= parseInt(z2[c]) ? 0 : -1;
        c -= 1;
    }
    let offset = 0;
    for (let i = 0; i < ans.length - 2; i++) {
        if (ans[i] == '0' && ans[i + 1] != '.') {
            offset += 1;
        }else {
            break;
        }
    }
    ans = ans.substring(offset);
    return ans[0] == '.' ? "0" + ans : ans;
}

// console.log(sub("0.17", "0.12"));
export default {
    sub
}

