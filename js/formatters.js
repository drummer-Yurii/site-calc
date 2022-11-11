export const percentFormatter = new Intl.NumberFormat('ru-RU',
    {
        style: 'percent',
        maximumFractionDigits: 3 
    }
);

export const priceFormatter = new Intl.NumberFormat('ua-UA',
    { 
        style: 'currency', 
        currency: 'UAH', 
        maximumFractionDigits: 0 
    }
);

export const priceFormatterDecimals = new Intl.NumberFormat('ua-UA',
    { 
        style: 'currency', 
        currency: 'UAH', 
        maximumFractionDigits: 2 
    }
);