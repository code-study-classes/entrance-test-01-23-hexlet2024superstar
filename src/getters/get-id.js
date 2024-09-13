import reader from "../hotels.js";

const getId = (fPath) => {
    const id = reader(fPath).split('\n').length;
    return id;
}

export default getId;