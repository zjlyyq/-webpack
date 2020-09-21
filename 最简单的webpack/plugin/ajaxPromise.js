function ajaxPromise(url, method) {
    return Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(res) {
            if (xhr.status === '200') {
                resolve(res);
            }else {
                reject(res);
            }
        }
        try {
            xhr.open();
        }catch (err) {
            reject(err);
        }
    })
}