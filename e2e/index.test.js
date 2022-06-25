const {GbizinfoClient} = require('..');

require('dotenv').config();

describe('findByCorporateNumber', () => {
  test('find by corporate number', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findByCorporateNumber('8000020130001'); // 東京都
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000020130001');
  });
});
