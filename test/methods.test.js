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

describe('findCertificationByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCertificationByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find certification by time range', async () => {
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
                'certification': [
                  {
                    'date_of_approval': '2016-01-21',
                    'title': 'hello',
                    'target': null,
                    'category': null,
                    'enterprise_scale': null,
                    'expiration_date': null,
                    'government_departments': '経済産業省',
                  },
                ],
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCertificationByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].certification.length).toEqual(1);
  });
});

describe('findCommendationByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findCommendationByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find commendation by time range', async () => {
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
                'commendation': [
                  {
                    'date_of_commendation': null,
                    'title': 'hello',
                    'target': null,
                    'category': null,
                    'government_departments': '厚生労働省',
                  },
                ],
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCommendationByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].commendation.length).toEqual(1);
  });
});

describe('findFinanceByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findFinanceByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find finance by time range with major shareholders', async () => {
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
                'kana': 'でじたるちょう',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'name_en': 'Digital Agency',
                'finance': {
                  'accounting_standards': 'aaa',
                  'fiscal_year_cover_page': 'bbb',
                  'major_shareholders': [
                    {
                      'name_major_shareholders': 'ccc',
                      'shareholding_ratio': 0.0109,
                    },
                  ],
                },
                'postal_code': '1020094',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findFinanceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].finance.majorShareholders.length).toEqual(1);
  });

  test('find finance by time range with management index', async () => {
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
                'kana': 'でじたるちょう',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'name_en': 'Digital Agency',
                'finance': {
                  'accounting_standards': 'aaa',
                  'fiscal_year_cover_page': 'bbb',
                  'management_index': [
                    {
                      'capital_stock_summary_of_business_results': 208757000000,
                      'capital_stock_summary_of_business_results_unit_ref': 'JPY',
                      'gross_operating_revenue_summary_of_business_results': null,
                      'gross_operating_revenue_summary_of_business_results_unit_ref': null,
                      'net_assets_summary_of_business_results': 441339000000,
                      'net_assets_summary_of_business_results_unit_ref': 'JPY',
                      'net_income_loss_summary_of_business_results': 26371000000,
                      'net_income_loss_summary_of_business_results_unit_ref': 'JPY',
                      'net_premiums_written_summary_of_business_results_ins': null,
                      'net_premiums_written_summary_of_business_results_ins_unit_ref': null,
                      'net_sales_summary_of_business_results': null,
                      'net_sales_summary_of_business_results_unit_ref': null,
                      'number_of_employees': null,
                      'number_of_employees_unit_ref': null,
                      'operating_revenue1_summary_of_business_results': null,
                      'operating_revenue1_summary_of_business_results_unit_ref': null,
                      'operating_revenue2_summary_of_business_results': null,
                      'operating_revenue2_summary_of_business_results_unit_ref': null,
                      'ordinary_income_loss_summary_of_business_results': 37216000000,
                      'ordinary_income_loss_summary_of_business_results_unit_ref': 'JPY',
                      'ordinary_income_summary_of_business_results': null,
                      'ordinary_income_summary_of_business_results_unit_ref': null,
                      'period': '4',
                      'total_assets_summary_of_business_results': 469767000000,
                      'total_assets_summary_of_business_results_unit_ref': 'JPY',
                    },
                  ],
                },
                'postal_code': '1020094',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findFinanceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].finance.managementIndex.length).toEqual(1);
  });
});

describe('findProcurementByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findProcurementByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find procurement by time range', async () => {
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
                'kana': 'でじたるちょう',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'name_en': 'Digital Agency',
                'postal_code': '1020094',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
                'procurement': [
                  {
                    'date_of_order': '2017-04-03T00:00:00+09:00',
                    'title': 'aaa',
                    'amount': 1686350,
                    'government_departments': '厚生労働省',
                    'joint_signatures': null,
                  },
                ],
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findProcurementByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].procurement.length).toEqual(1);
  });
});

describe('findSubsidyByTimeRange', () => {
  test('throws without argument `page`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange()).toThrow();
  });

  test('throws when `page` is not number', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange('1')).toThrow();
  });

  test('throws without argument `from`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange(1)).toThrow();
  });

  test('throws when `from` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange(1, '2021-04-01')).toThrow();
  });

  test('throws without argument `to`', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange(1, new Date(2021, 3, 1))).toThrow();
  });

  test('throws when `to` is not Date', async () => {
    undici.request.mockReturnValue(Promise.resolve({}));
    const client = new GbizinfoClient({token: 'xxxxx'});
    expect(() => client.findSubsidyByTimeRange(1, new Date(2021, 3, 1), '2021-04-01')).toThrow();
  });

  test('find subsidy by time range', async () => {
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
                'kana': 'でじたるちょう',
                'location': '東京都千代田区紀尾井町１番３号東京ガーデンテラス紀尾井町',
                'name': 'デジタル庁',
                'name_en': 'Digital Agency',
                'postal_code': '1020094',
                'status': '-',
                'update_date': '2021-09-02T00:00:00+09:00',
                'subsidy': [
                  {
                    'amount': '621000',
                    'date_of_approval': '2017-12-07',
                    'government_departments': '厚生労働省',
                    'joint_signatures': null,
                    'note': null,
                    'subsidy_resource': null,
                    'target': null,
                    'title': 'aaaaa',
                  },
                ],
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findSubsidyByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(12345);
    expect(actual.totalPage).toEqual(12345);
    expect(actual.pageNumber).toEqual(12345);
    expect(actual.corporations[0].corporateNumber).toEqual('8000012010038');
    expect(actual.corporations[0].subsidy.length).toEqual(1);
  });
});
