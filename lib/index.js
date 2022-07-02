const {request} = require('undici');
const {convertToCorporate} = require('./converters');
const {
  formatYYYYMMDD,
  validateTimeRangeOptions,
} = require('./utils');

const PACKAGE_NAME = '@ihori-system/gbizinfo';
const API_ENDPOINT = 'https://info.gbiz.go.jp/hojin';

/**
 * @typedef {Object} GbizinfoClientOption
 * @property {string} token APIトークン
 */

/**
 * GbizinfoClient
 */
class GbizinfoClient {
  /**
   * constructor
   * @param {GbizinfoClientOption} options
   */
  constructor(options) {
    if (options == null) {
      throw new TypeError(`[${PACKAGE_NAME}] options引数が指定されていません`);
    }
    if (options.token == null) {
      throw new TypeError(`[${PACKAGE_NAME}] tokenオプションが指定されていません`);
    }
    this.token = options.token;
    this.defaultHeaders = {'X-hojinInfo-api-token': this.token};
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getUsingGET|APIドキュメント}
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 法人基本情報
   */
  findByCorporateNumber(corporateNumber) {
    return this.findByCorporateNumberRaw(corporateNumber)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return corporations.map(convertToCorporate);
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {unknown} レスポンスボディ
   */
  findByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCertificationUsingGET|APIドキュメント}
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 届出・認定情報
   */
  findCertificationByCorporateNumber(corporateNumber) {
    return this.findCertificationByCorporateNumberRaw(corporateNumber)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return corporations.map(convertToCorporate);
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {unknown} レスポンスボディ
   */
  findCertificationByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}/certification`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCommendationUsingGET|APIドキュメント}
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 表彰情報
   */
  findCommendationByCorporateNumber(corporateNumber) {
    return this.findCommendationByCorporateNumberRaw(corporateNumber)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return corporations.map(convertToCorporate);
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {unknown} レスポンスボディ
   */
  findCommendationByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}/commendation`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getFinanceUsingGET|APIドキュメント}
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 財務情報
   */
  findFinanceByCorporateNumber(corporateNumber) {
    return this.findFinanceByCorporateNumberRaw(corporateNumber)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return corporations.map(convertToCorporate);
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {unknown} レスポンスボディ
   */
  findFinanceByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}/finance`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getPatentUsingGET|APIドキュメント}
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 特許情報
   */
  findPatentByCorporateNumber(corporateNumber) {
    return this.findPatentByCorporateNumberRaw(corporateNumber)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return corporations.map(convertToCorporate);
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {unknown} レスポンスボディ
   */
  findPatentByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}/patent`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 法人基本情報およびページングの情報
   */
  findByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCertificationUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 届出・認定情報
   */
  findCertificationByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findCertificationByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findCertificationByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/certification`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCommendationUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 表彰情報
   */
  findCommendationByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findCommendationByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findCommendationByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/commendation`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getFinanceUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 財務情報
   */
  findFinanceByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findFinanceByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findFinanceByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/finance`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getPatentUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 特許情報
   */
  findPatentByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findPatentByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findPatentByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/patent`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getProcurementUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 調達情報
   */
  findProcurementByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findProcurementByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findProcurementByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/procurement`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getSubsidyUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 補助金情報
   */
  findSubsidyByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findSubsidyByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findSubsidyByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/subsidy`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }

  /**
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getWorkplaceInformationUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 職場情報
   */
  findWorkplaceByTimeRange(page, from, to) {
    validateTimeRangeOptions(page, from, to);

    return this.findWorkplaceByTimeRangeRaw(page, from, to)
        .then((data) => {
          const corporations = data['hojin-infos'];
          return {
            totalCount: Number(data['totalCount']),
            totalPage: Number(data['totalPage']),
            pageNumber: Number(data['pageNumber']),
            corporations: corporations.map(convertToCorporate),
          };
        });
  }

  /**
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findWorkplaceByTimeRangeRaw(page, from, to) {
    return request(`${API_ENDPOINT}/v1/hojin/updateInfo/workplace`, {
      headers: this.defaultHeaders,
      query: {
        page,
        from: formatYYYYMMDD(from),
        to: formatYYYYMMDD(to),
      },
    })
        .then(({body}) => body.json());
  }
}

module.exports.GbizinfoClient = GbizinfoClient;
