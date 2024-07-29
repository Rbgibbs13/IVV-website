import confetti from 'canvas-confetti';

const count = 200;
const defaults = {
    origin: { y: 0.7, x: 0.1 },
    zIndex: 1000,
};

const fire = (particleRatio, opts) => {
    confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
    });
};

export const fireConfetti = () => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55
    });
    fire(0.2, {
        spread: 60
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.33, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45
    });
};

export function pluralize(name, count) {
    if(count === 1) {
        return name;
    }

    return name + 's';
};

export function currencyFormat(value) {
    if(value.length == 6 ) {
        return value.substring(0, 3) + ',' + value.substring(2);
    } else if(value.length == 5) {
        return value.substring(0, 2) + ',' + value.substring(2);
    } else if(value.length == 4) {
        return value.substring(0, 1) + ',' + value.substring(1);
    } else {
        return value;
    }
};

export const formatDate = (input) => {
    var date = new Date(input * 1);
    var d = date.getDay();
    var m = date.getMonth()+1;
    var y = date.getFullYear();

    if(d < 10) { d = `0${d}`; }
    
    switch(m) {
        case 1:
            m = 'January';
            break;
        case 2:
            m = 'February';
            break;
        case 3:
            m = 'March';
            break;
        case 4:
            m = 'April';
            break;
        case 5: 
            m = 'May';
            break;
        case 6: 
            m = 'June';
            break;
        case 7:
            m = 'July';
            break;
        case 8:
            m = 'August';
            break;
        case 9:
            m = 'September';
            break;
        case 10:
            m = 'October';
            break;
        case 11:
            m = 'November';
            break;
        case 12:
            m = 'December';
            break;
        default:
            m = 'January';
    }
    
    return `${d}/${m}/${y}`;
};

export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = qindow.indexedDB.open('shop-shop', 1);
        let db, tx, store;
        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore('products', { keyPath: '_id' });
            db.createObjectStore('categories', { keyPath: '_id' });
            db.createObjectStore('cart', { keyPath: '_id' });
            db.createObjectStore('posts', { keyPath: '_id' });
        };

        request.onerror = function(e) {
            console.error('Error accessing iDB!');
        };

        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, 'readWrite');
            store = tx.objectStore(storeName);

            db.onerror = function(e) { console.error('Error accessing iDB!'); }

            switch(method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            tx.oncomplete = function() {
                db.close();
            };
        };
    });
}