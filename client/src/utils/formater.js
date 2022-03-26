export const phoneParser = (number) => number ? number.replace(/-/g, "") : "";
export const phoneFormatter = (number) => {
    if (!number) return "";
    // NNN-NNN-NNNN
    const splitter = /.{1,3}/g;
    number = number.substring(0, 10);
    return number.substring(0, 7).match(splitter).join("-") + number.substring(7);
};