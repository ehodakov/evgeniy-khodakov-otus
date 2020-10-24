/**
 * Функция нахождения максимального списка рекомендаций
 *
 * @param {Array} orders - список заказов для подпобра рекомендаций
 *
 * @return {Array} максимальный список рекомендаций
 */
function maxItemAssociation(orders) {

    return orders.reduce((max, item, index, data) => {

        let association = data.reduce((group, element) => {

            if (item.filter(x => element.includes(x)).length > 0) {

                // Если покупки пересекаются,
                // добавляем массив к группе рекомендаций
                // и возвращаем только уникальные значения
                return Array.from(new Set(group.concat(element)));
            }

            return group;

        }, []);

        // возвращаем наибольшую группу ассоциаций
        return (association.length > max.length) ? association : max ;

    }, []);

}

// Список заказов для подбора рекомендаций
let orders = [
    ['a', 'b'],
    ['a', 'c'],
    ['d', 'e'],
];

let result = maxItemAssociation(orders);

console.log(`\nData: ${JSON.stringify(orders)}\n`);

console.log(`Result: ${JSON.stringify(result)}\n`);
