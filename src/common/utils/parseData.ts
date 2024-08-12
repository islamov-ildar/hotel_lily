export const parseData = (allData) => {
    const allDataForParse = {};

    allDataForParse.isSalesEnabled = allData.isSalesEnabled;

    allDataForParse.year = allData.priceYear

    allDataForParse.salesMonths = allData.salesMonths;
    allDataForParse.salesText = {main: allData.salesText.main, additional: allData.salesText.additional};

    allDataForParse.standard = {pricesByMonths: allData.standard, year: allData.priceYear};
    allDataForParse.semiLuxurySeaView = {pricesByMonths: allData.semiLuxurySeaView, year: allData.priceYear};
    allDataForParse.semiLuxuryFamily = {pricesByMonths: allData.semiLuxuryFamily, year: allData.priceYear};

    for (const key in allData.salesMonths) {
        if(allData.salesMonths[key]) {
            allDataForParse.standard.pricesByMonths.map(it => it.month === key ? it['promotion'] = true : false);
            allDataForParse.semiLuxurySeaView.pricesByMonths.map(it => it.month === key ? it['promotion'] = true : false);
            allDataForParse.semiLuxuryFamily.pricesByMonths.map(it => it.month === key ? it['promotion'] = true : false);
        }
    }

    console.log('allDataForParse', allDataForParse);

    return allDataForParse;
}
