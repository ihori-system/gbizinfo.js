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

describe('findCertificationByCorporateNumber', () => {
  test('find certification by corporate number', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findCertificationByCorporateNumber('8000012010038'); // デジタル庁
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000012010038');
    expect(actual[0].certification).toBeDefined();
  });
});

describe('findCommendationByCorporateNumber', () => {
  test('find commendation by corporate number', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findCommendationByCorporateNumber('8000012010038'); // デジタル庁
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000012010038');
    expect(actual[0].commendation).toBeDefined();
  });
});

describe('findByTimeRange', () => {
  test('find by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findByTimeRange(1, new Date('2021-04-01'), new Date('2021-04-01'));
    expect(actual.totalCount).toEqual(1694);
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

describe('findCommendationByTimeRange', () => {
  test('find commendation by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findCommendationByTimeRange(1, new Date('2020-03-27'), new Date('2020-03-27'));
    expect(actual.totalCount).toEqual(53504);
    expect(actual.totalPage).toEqual(536);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(100);
    expect(actual.corporations[0].commendation.length).toEqual(1);
  });
});

describe('findFinanceByTimeRange', () => {
  test('find finance by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findFinanceByTimeRange(1, new Date('2019-03-20'), new Date('2019-03-20'));
    expect(actual.totalCount).toEqual(95);
    expect(actual.totalPage).toEqual(1);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(95);
    expect(actual.corporations[0].finance.majorShareholders.length).toEqual(10);
    expect(actual.corporations[0].finance.managementIndex.length).toEqual(5);
  });
});

describe('findProcurementByTimeRange', () => {
  test('find procurement by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findProcurementByTimeRange(1, new Date('2020-11-27'), new Date('2020-11-27'));
    expect(actual.totalCount).toEqual(73);
    expect(actual.totalPage).toEqual(1);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(60);
    expect(actual.corporations[0].procurement.length).toEqual(1);
  });
});

// Disable it due to timeout.
// FIXME: Resolve timeout issue and enable it.
// describe('findPatentByTimeRange', () => {
//   test('find patent by time range', async () => {
//     const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
//     const actual = await client.findPatentByTimeRange(1, new Date('2021-08-27'), new Date('2021-08-27'));
//     expect(actual.totalCount).toEqual(41498);
//     expect(actual.totalPage).toEqual(415);
//     expect(actual.pageNumber).toEqual(1);
//     expect(actual.corporations.length).toEqual(100);
//     expect(actual.corporations[0].patent.length).toEqual(1);
//   });
// });

describe('findSubsidyByTimeRange', () => {
  test('find subsidy by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findSubsidyByTimeRange(1, new Date('2021-04-27'), new Date('2021-04-27'));
    expect(actual.totalCount).toEqual(41498);
    expect(actual.totalPage).toEqual(415);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(100);
    expect(actual.corporations[0].subsidy.length).toEqual(1);
  });
});

describe('findWorkplaceByTimeRange', () => {
  test('find workplace by time range', async () => {
    const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});
    const actual = await client.findWorkplaceByTimeRange(1, new Date('2021-07-21'), new Date('2021-07-21'));
    expect(actual.totalCount).toEqual(18);
    expect(actual.totalPage).toEqual(1);
    expect(actual.pageNumber).toEqual(1);
    expect(actual.corporations.length).toEqual(18);
    expect(actual.corporations[0].workplace).toBeDefined();
  });
});
