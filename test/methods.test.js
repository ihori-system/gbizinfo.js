const {GbizinfoClient} = require('..');

jest.mock('undici');
const undici = require('undici');

describe('findByCorporateNumber', () => {
  test('find by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'id': '8000020130001',
            'errors': null,
            'message': '200 - OK.',
            'hojin-infos': [
              {
                'corporate_number': '8000020130001',
                'postal_code': '1600023',
                'location': '東京都新宿区西新宿２丁目８－１',
                'name': '東京都',
                'kana': 'とうきようと',
                'name_en': 'Tokyo Metropolitan Government',
                'status': '-',
                'update_date': '2018-04-03T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findByCorporateNumber('8000020130001');
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('8000020130001');
  });
});
