import axios from 'axios';

export const getCurrency = async () => {
    const { data } = await axios.get('https://api.monobank.ua/bank/currency');
    return data;
}