const waitFewSec = (msec, triggerFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (triggerFail) {
                reject(false);
                return;
            }

            resolve(true);
        }, msec);
    });
};
const asyncFn = async() => {
    const result = await waitFewSec(1000);
    return result;
};

async function doAsyncMagic() {
    for (var i = 0; i < 4; i++) {
        var result = await console.log(asyncFn());
    }
    return result;
}

doAsyncMagic(); // [true, true, true, true]

async function* rangeGen() {
    for (let i = 1; i <= 15; i++) {
        yield i;
    }
}

async function iterateRange() {
    var summ = 0;
    for await (const el of rangeGen()) {
        summ += el;
    }
    return summ;
}

iterateRange(); // Promise {<resolved>: 120}