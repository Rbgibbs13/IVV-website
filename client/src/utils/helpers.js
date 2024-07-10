export function pluralize(name, count) {
    if(count === 1) {
        return name;
    }

    return name + 's';
};

export function currencyFormat(value) {
    console.log(value.type);
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