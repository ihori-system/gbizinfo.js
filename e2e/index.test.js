const {GbizinfoClient} = require('..');

require('dotenv').config();

describe('findByCorporateNumber', () => {
  test('find by corporate number', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findByCorporateNumber('8000012010038'); // デジタル庁
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000012010038');
  });
});

describe('findByTimeRange', () => {
  test('find by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findByTimeRange(1, new Date('2021-04-01'), new Date('2021-04-01'));
    expect(actual.totalCount).toEqual(1695);
    expect(actual.totalPage).toEqual(17);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(100);
  });
});

describe('findCertificationByTimeRange', () => {
  test('find certification by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findCertificationByTimeRange(1, new Date('2021-04-27'), new Date('2021-04-27'));
    expect(actual.totalCount).toEqual(10);
    expect(actual.totalPage).toEqual(1);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(10);
    expect(actual.corporations[0].certification.length).toEqual(1);
  });
});
