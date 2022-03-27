import { fb } from "../service";
export const uploadImageAsPromise = (image, title, username) => {
    return new Promise(function (resolve, reject) {
        const subFolder = title.replace(/\s/g, "");
        const uploadTask = fb.storage.ref(`${username}/${subFolder}/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            error => {
                reject(error);
            },
            () => {
                fb.storage
                    .ref(`${username}/${subFolder}`)
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        resolve(url);
                    });
            });
    });

};

export const getAllImageUrl = (formValues) => {
    return new Promise((resolve, reject) => {
        var urls = [];
        this.state.images.forEach((image) => {
            const files = Object.values(image);
            urls.push(this.uploadImageAsPromise(files[0], formValues.title, this.state.username));
        });
        Promise.all(urls).then((urls) => {
            resolve(urls);
        }).catch(err => {
            reject(err);
        });
    });

};