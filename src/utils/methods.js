import numeral from 'numeral'

const moneyUgx = (money) => `UGX ${numeral(money).format('0,0')}`;

export default moneyUgx;