import { fb } from "../service";
import { update } from "../actions";
export const uploadImage = (file, image, formValues, token, email) => {

    const uploadTask = fb.storage.ref(`${file}/${image.name}`).put(image);
    uploadTask.on(
        "state_changed",
        snapshot => {
            Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        error => {
            console.log(error);
        },
        () => {
            fb.storage
                .ref(`${file}`)
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    update(formValues, url, token, email);
                    console.log(image);
                });

        }
    );
};