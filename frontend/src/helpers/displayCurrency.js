const displayNPRCurrency = (num) => {
    const formatter = new Intl.NumberFormat('ne-NP', {
        style: "currency",
        currency: 'NPR',
        currencyDisplay: 'symbol', 
        minimumFractionDigits: 2
    });

    return formatter.format(num);
};

export default displayNPRCurrency;
