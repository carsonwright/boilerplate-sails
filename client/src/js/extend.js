export default function deepObjectExtend (source) {
    let target = {}
    for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
            if (target[prop] && typeof source[prop] === 'object') {
                deepObjectExtend(target[prop], source[prop]);
            }
            else {
                target[prop] = source[prop];
            }
        }
    }
    return target;
}