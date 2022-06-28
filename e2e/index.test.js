const {GbizinfoClient} = require('..');

require('dotenv').config();

const hojinInfosProperties = [
  'business_items',
  'business_summary',
  'capital_stock',
  'close_cause',
  'close_date',
  'company_size_female',
  'company_size_male',
  'company_url',
  'corporate_number',
  'date_of_establishment',
  'employee_number',
  'founding_year',
  'kana',
  'location',
  'name',
  'name_en',
  'postal_code',
  'representative_name',
  'representative_position',
  'status',
  'update_date',
];

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
    const actual = await client.findByTimeRange(1, new Date(2021, 3, 1), new Date(2021, 3, 1));
    expect(actual.totalCount).toEqual(1695);
    expect(actual.totalPage).toEqual(17);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(100);
  });
});

describe('findByTimeRangeRaw', () => {
  test('check property existence', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findByTimeRangeRaw(1, new Date(2021, 3, 1), new Date(2021, 3, 1));
    expect(actual['totalCount']).toBeDefined();
    expect(actual['totalPage']).toBeDefined();
    expect(actual['pageNumber']).toBeDefined();
    expect(actual['hojin-infos']).toBeDefined();
    actual['hojin-infos'].forEach((d) => {
      expect(d['corporate_number']).toBeDefined();
      expect(d['location']).toBeDefined();
      expect(d['name']).toBeDefined();
      expect(d['postal_code']).toBeDefined();
      expect(d['status']).toBeDefined();
      expect(d['update_date']).toBeDefined();
      const diff = Object.keys(d).filter((k) => hojinInfosProperties.includes(k) === false);
      if (diff.length > 0) {
        console.log(d);
        console.log(diff);
      }
      expect(diff.length).toEqual(0);
    });
  });
});
