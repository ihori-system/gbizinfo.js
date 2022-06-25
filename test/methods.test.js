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
