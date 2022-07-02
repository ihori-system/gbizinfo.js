const {GbizinfoClient} = require('..');

jest.mock('undici');
const undici = require('undici');

describe('findByCorporateNumber', () => {
  test('find by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findByCorporateNumber('');
    expect(actual.length).toEqual(1);
    expect(actual[0].corporateNumber).toEqual('string');
  });
});

describe('findCertificationByCorporateNumber', () => {
  test('find certification by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
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
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCertificationByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].certification.length).toEqual(1);
  });
});

describe('findCommendationByCorporateNumber', () => {
  test('find commendation by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'commendation': [
                  {
                    'date_of_commendation': null,
                    'title': 'hello',
                    'target': null,
                    'category': null,
                    'government_departments': '厚生労働省',
                  },
                ],
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCommendationByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].commendation.length).toEqual(1);
  });
});

describe('findFinanceByCorporateNumber', () => {
  test('find finance by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'finance': {
                  'accounting_standards': 'aaa',
                  'fiscal_year_cover_page': 'bbb',
                  'major_shareholders': [
                    {
                      'name_major_shareholders': 'ccc',
                      'shareholding_ratio': 0.0109,
                    },
                  ],
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
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findFinanceByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].finance.majorShareholders.length).toEqual(1);
    expect(actual[0].finance.managementIndex.length).toEqual(1);
  });
});

describe('findPatentByCorporateNumber', () => {
  test('find patent by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'patent': [
                  {
                    'application_date': 'string',
                    'application_number': 'string',
                    'classifications': [
                      {},
                    ],
                    'patent_type': 'string',
                    'title': 'string',
                  },
                ],
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findPatentByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].patent.length).toEqual(1);
    expect(actual[0].patent[0].classifications.length).toEqual(1);
  });
});

describe('findProcurementByCorporateNumber', () => {
  test('find procurement by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'procurement': [
                  {
                    'date_of_order': '2017-04-03T00:00:00+09:00',
                    'title': 'aaa',
                    'amount': 1686350,
                    'government_departments': '厚生労働省',
                    'joint_signatures': null,
                  },
                ],
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findProcurementByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].procurement.length).toEqual(1);
  });
});

describe('findSubsidyByCorporateNumber', () => {
  test('find subsidy by corporate number', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
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
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findSubsidyByCorporateNumber(1, new Date(), new Date());
    expect(actual[0].corporateNumber).toEqual('string');
    expect(actual[0].subsidy.length).toEqual(1);
  });
});

describe('findByTimeRange', () => {
  test('find by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
  });
});

describe('findCertificationByTimeRange', () => {
  test('find certification by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
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
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCertificationByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].certification.length).toEqual(1);
  });
});

describe('findCommendationByTimeRange', () => {
  test('find commendation by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'commendation': [
                  {
                    'date_of_commendation': null,
                    'title': 'hello',
                    'target': null,
                    'category': null,
                    'government_departments': '厚生労働省',
                  },
                ],
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findCommendationByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].commendation.length).toEqual(1);
  });
});

describe('findFinanceByTimeRange', () => {
  test('find finance by time range with major shareholders', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
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
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findFinanceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].finance.majorShareholders.length).toEqual(1);
  });

  test('find finance by time range with management index', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
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
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findFinanceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].finance.managementIndex.length).toEqual(1);
  });
});

describe('findPatentByTimeRange', () => {
  test('find patent by time range with classifications', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'patent': [
                  {
                    'application_date': 'string',
                    'application_number': 'string',
                    'classifications': [
                      {},
                    ],
                    'patent_type': 'string',
                    'title': 'string',
                  },
                ],
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findPatentByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].patent.length).toEqual(1);
    expect(actual.corporations[0].patent[0].classifications.length).toEqual(1);
  });

  test('find patent by time range without classifications', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'patent': [
                  {
                    'application_date': 'string',
                    'application_number': 'string',
                    'patent_type': 'string',
                    'title': 'string',
                  },
                ],
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findPatentByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].patent.length).toEqual(1);
  });
});

describe('findProcurementByTimeRange', () => {
  test('find procurement by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'procurement': [
                  {
                    'date_of_order': '2017-04-03T00:00:00+09:00',
                    'title': 'aaa',
                    'amount': 1686350,
                    'government_departments': '厚生労働省',
                    'joint_signatures': null,
                  },
                ],
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findProcurementByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].procurement.length).toEqual(1);
  });
});

describe('findSubsidyByTimeRange', () => {
  test('find subsidy by time range', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
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
                'update_date': '2021-09-02T00:00:00+09:00',
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findSubsidyByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].subsidy.length).toEqual(1);
  });
});

describe('findWorkplaceByTimeRange', () => {
  test('find workplace by time range with base infos', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
                'workplace_info': {
                  'base_infos': {
                    'average_age': 0,
                    'average_continuous_service_years': 0,
                    'average_continuous_service_years_Female': 0,
                    'average_continuous_service_years_Male': 0,
                    'average_continuous_service_years_type': 'string',
                    'month_average_predetermined_overtime_hours': 0,
                  },
                },
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findWorkplaceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].workplace).toBeDefined();
  });

  test('find workplace by time range with compatibility of childcare and work', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
                'workplace_info': {
                  'compatibility_of_childcare_and_work': {
                    'maternity_leave_acquisition_num': 0,
                    'number_of_maternity_leave': 0,
                    'number_of_paternity_leave': 0,
                    'paternity_leave_acquisition_num': 0,
                  },
                },
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findWorkplaceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].workplace).toBeDefined();
  });

  test('find workplace by time range with women activity infos', async () => {
    undici.request.mockReturnValue(Promise.resolve({
      body: {
        json: () => {
          return Promise.resolve({
            'totalCount': '11111',
            'totalPage': '22222',
            'pageNumber': '33333',
            'hojin-infos': [
              {
                'corporate_number': 'string',
                'name': 'string',
                'status': 'string',
                'update_date': '2021-09-02T00:00:00+09:00',
                'workplace_info': {
                  'women_activity_infos': {
                    'female_share_of_manager': 0,
                    'female_share_of_officers': 0,
                    'female_workers_proportion': 0,
                    'female_workers_proportion_type': 'string',
                    'gender_total_of_manager': 0,
                    'gender_total_of_officers': 0,
                  },
                },
              },
            ],
          });
        },
      },
    }));
    const client = new GbizinfoClient({token: 'xxxxx'});
    const actual = await client.findWorkplaceByTimeRange(1, new Date(), new Date());
    expect(actual.totalCount).toEqual(11111);
    expect(actual.totalPage).toEqual(22222);
    expect(actual.pageNumber).toEqual(33333);
    expect(actual.corporations[0].corporateNumber).toEqual('string');
    expect(actual.corporations[0].workplace).toBeDefined();
  });
});
