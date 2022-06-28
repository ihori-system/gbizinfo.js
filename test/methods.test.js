const {GbizinfoClient} = require('..');

jest.mock('undici');
const undici = require('undici');

describe('findByCorporateNumber', () => {
  test('find by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'id': '8000012010038',
            'errors': null,
            'message': '200 - OK.',
            'hojin-infos': [
              {
                'corporate_number': '8000012010038',
                'postal_code': '1020094',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'kana': 'でじたるちょう',
                'name_en': 'Digital Agency',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findByCorporateNumber('8000012010038');
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000012010038');
  });
});

describe('findByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'id': null,
            'errors': null,
            'message': '200 - OK.',
            'totalCount': '12345',
            'totalPage': '12345',
            'pageNumber': '12345',
            'hojin-infos': [
              {
                'corporate_number': '8000012010038',
                'postal_code': '1020094',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'kana': 'でじたるちょう',
                'name_en': 'Digital Agency',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
  });
});
