class Goods {
    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable (available) {
        this.available = available;
    }
}

class GoodsList {
    #goods;

    constructor (goods, filter, sortPrice, sortDir) {
        this.#goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    get list() {
        let result = []
        for (let i=0; i<this.#goods.length; i++) {
            if (this.#goods[i].available === 'Да') {
                // result.length += 1;
                if (filter.test(this.#goods[i]['name']) === true) {
                    result[result.length] = this.#goods[i];
                }
            } 
        }
        if (this.sortPrice === true) {
            console.log('Применяется сортировка');
            if (this.sortDir === true) {
                console.log('Сортировка по возрастанию');
                result.sort(( a, b ) => {
                    return b.price - a.price;
                });
            } else {
                console.log('Сортировка по убыванию');
                result.sort(( a, b ) => {
                    return a.price - b.price;
                });
            }
        }
        // result.filter.test(good.name)
        return result
    }

    add (good) {
        for (let i=0; i<this.#goods.length; i++) {
            if (good.name === this.#goods[i].name) {
                return console.log('Такой товар уже есть в каталоге')
            }
        }
        this.#goods[this.#goods.length] = good;
        return console.log('Товар добавлен в каталог')
    }

    remove(id) {
        for (let i=0; i<this.#goods.length; i++) {
            if (this.#goods[i].id === id) {
                var id_to_del = id
                
            }
        this.#goods.splice(this.#goods.id_to_del, 1)
        }
        return console.log('Товар удален из каталога')
    }
}

class BasketGood extends Goods {
    constructor (good, amount) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.amount = amount;
    }
}

class Basket {
    constructor (goods) {
        this.goods = goods
    }
}

good1 = new Goods('1', 
    'Кроссовки CORERACER CBLACK/CBLACK/FTWWHT', 
    'Кроссовки adidas Coreracer идеально сочетают в себе поддержку стопы и уличный стиль. Легкая и дышащая модель дарит комфорт в течение всего дня. Логотип adidas завершает спортивный образ. Шнуровка Текстильный верх Дышащая модель Легкие беговые кроссовки',
    [39, 40, 42, 43],
    3249,
    'Да'
);

good2 = new Goods(
    '2',
    'Кроссовки RUNFALCON 2.0 CRENAV/FTWWHT/LEGINK',
    'текстиль, синтетический материал',
    [38, 41, 42, 43],
    4159,
    'Нет'
);

good3 = new Goods(
    '3',
    'Кроссовки Exhibit A CBLACK/SILVMT/TMDRGR',
    'Если бы Exhibit A были спортсменом, они были бы универсальным игроком. Баскетбольные кроссовки adidas обеспечат тебе устойчивость и скорость на площадке, а их дизайн будет отлично смотреться и на улицах города. Дышащий верх усилен в ключевых зонах для поддержки стопы. Промежуточная подошва Lightstrike гарантирует легкость и динамичность движений. Модель выполнена из переработанных материалов в рамках наших обязательств по сокращению пластиковых отходов. 20% элементов верха минимум на 50% состоят из переработанных материалов.',
    [42, 43],
    7149,
    'Да'
);

good4 = new Goods(
    '4',
    'Кроссовки ROGUERA CBLACK/CBLACK/GREY',
    'Спортивные тренды 80-х. Удобные современные кроссовки с классическим силуэтом. Кожаный верх с покрытием дополнен культовой промежуточной подошвой с двумя выступами.',
    [44],
    3249,
    'Да'
);

good5 = new Goods(
    '5',
    'Кроссовки OWNTHEGAME 2.0 FTWWHT/GREFOU',
    'текстиль, синтетический материал',
    [40, 41],
    5149,
    'Да'
);

good1.setAvailable('Нет')
console.log(good1);

goodslist = new GoodsList([good2, good4, good5], filter=/CBLACK/i, sortPrice=true, sortDir=true)
console.log('goodlist.list =', goodslist.list)
goodslist.add(good3)
goodslist.add(good3)
console.log('goodlist.list =', goodslist.list)
goodslist.remove('4')
console.log('goodlist.list =', goodslist.list)

basketgood3 = new BasketGood(good3, 2)
console.log('basketgood =', basketgood3)
basketgood4 = new BasketGood(good4, 3)

basket = new Basket([basketgood3, basketgood4])
console.log('basket =', basket)