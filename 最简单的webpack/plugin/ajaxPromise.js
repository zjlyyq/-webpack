export default function ajaxPromise(url, method) {
    return Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = (res) => {
            if (xhr.status === '200') {
                resolve(res);
            } else {
                reject(res);
            }
        };
        try {
            xhr.open(url, method);
        } catch (err) {
            reject(err);
        }
    });
}
