const {request} = require('undici');

const PACKAGE_NAME = '@ihori-system/gbizinfo';
const API_ENDPOINT = 'https://info.gbiz.go.jp/hojin';

/**
 * @typedef {Object} GbizinfoClientOption
 * @property {string} token APIトークン
 */

/**
 * @param {unknown} data
 * @return {Corporation} 法人基本情報
 */
function convertToCorporate(data) {
  return {
    businessItems: data['business_items'],
    businessSummary: data['business_summary'],
    capitalStock: data['capital_stock'],
    closeCause: data['close_cause'],
    closeDate: data['close_date'],
    companySizeFemale: data['company_size_female'],
    companySizeMale: data['company_size_male'],
    companyUrl: data['company_url'],
    corporateNumber: data['corporate_number'],
    dateOfEstablishment: data['date_of_establishment'],
    employeeNumber: data['employee_number'],
    foundingYear: data['founding_year'],
    kana: data['kana'],
    location: data['location'],
    name: data['name'],
    nameEn: data['name_en'],
    postalCode: data['postal_code'],
    representativeName: data['representative_name'],
    representativePosition: data['representative_position'],
    status: data['status'],
    updateDate: data['update_date'],
  };
}


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
   * {@link https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getUpdateInfoUsingGET|APIドキュメント}
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {Promise<Object>} 法人基本情報およびページングの情報
   */
  findByTimeRange(page, from, to) {
    if (page == null) {
      throw new TypeError(`[${PACKAGE_NAME}] page引数が指定されていません`);
    }
    if (typeof page !== 'number') {
      throw new TypeError(`[${PACKAGE_NAME}] pageに数値以外の値が入っています`);
    }
    if (from == null) {
      throw new TypeError(`[${PACKAGE_NAME}] from引数が指定されていません`);
    }
    if (from instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] fromがDateオブジェクトではありません`);
    }
    if (to == null) {
      throw new TypeError(`[${PACKAGE_NAME}] to引数が指定されていません`);
    }
    if (to instanceof Date === false) {
      throw new TypeError(`[${PACKAGE_NAME}] toがDateオブジェクトではありません`);
    }
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
   *
   * @param {number} page
   * @param {Date} from
   * @param {Date} to
   * @return {unknown} レスポンスボディ
   */
  findByTimeRangeRaw(page, from, to) {
    const formatYYYYMMDD = (d) => {
      const padTo2Digits = (n) => n.toString().padStart(2, '0');
      return `${d.getFullYear()}${padTo2Digits(d.getMonth() + 1)}${padTo2Digits(d.getDate())}`;
    };
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
}

module.exports.GbizinfoClient = GbizinfoClient;
