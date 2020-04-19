const THUMBNAIL = "140x84";
const MEDIUM_SIZE = "180x108";
const LARGE_SIZE = "300x180";
const FULL_SIZE = "500x300";
const regex = new RegExp(`(${THUMBNAIL}|${MEDIUM_SIZE}|${LARGE_SIZE}|${FULL_SIZE})`);

const formatSrc = (src) => {
    let { origin, pathname } = new URL(src);
    if(!pathname.match(regex)) {
        origin = origin.replace(/(:\/\/i1|:\/\/vcdn1)/, "://i");
        pathname = pathname.replace(".jpg", `_${THUMBNAIL}.jpg`);
        return `${origin}${pathname}`;
    }
    return src;
}


const toThumbnail = (src) => {
    src = formatSrc(src);
    return src.replace(regex, THUMBNAIL);
}

const toMedium = (src) => {
    src = formatSrc(src);
    return src.replace(regex, MEDIUM_SIZE);
}

const toLarge = (src) => {
    src = formatSrc(src);
    return src.replace(regex, LARGE_SIZE);
}

const toFull = (src) => {
    src = formatSrc(src);
    return src.replace(regex, FULL_SIZE);
}

export default { toThumbnail, toMedium, toLarge, toFull };

