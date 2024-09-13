import reader from "../hotels.js";

const getId = (fPath) => {
    const id = reader(fPath).length;
    return id;
}

export default getId;