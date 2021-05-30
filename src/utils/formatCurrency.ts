export const formatCurrency = (value: number) => {
    const price = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });

    return price;
};