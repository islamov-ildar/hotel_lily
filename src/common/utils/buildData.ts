import type {IPriceTable} from "@/common/mockData/prices";

export const buildData = (data: IPriceTable) => {

    return data.pricesByMonths.map(it => {
        if (Object.prototype.hasOwnProperty.call(it, 'promotion')) {
            delete it['promotion']
        }
        return it
    })
}
