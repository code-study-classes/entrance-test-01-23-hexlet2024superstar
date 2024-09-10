import readlineSync from 'readline-sync';
export function Hotel(Hotell) {
    console.log(`Question: ${Hotell}`);
    return readlineSync.hotell('Your answer: ');
}

