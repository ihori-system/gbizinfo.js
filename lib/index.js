const {request} = require('undici');

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
          return corporations.map((corporation) => ({
            corporateNumber: corporation['corporate_number'],
            postalCode: corporation['postal_code'],
            location: corporation['location'],
            name: corporation['name'],
            kana: corporation['kana'],
            nameEn: corporation['name_en'],
            status: corporation['status'],
            updateDate: corporation['update_date'],
          }));
        });
  }

  /**
   * @param {string} corporateNumber 法人番号
   * @return {Promise<Array>} 法人基本情報
   */
  findByCorporateNumberRaw(corporateNumber) {
    return request(`${API_ENDPOINT}/v1/hojin/${corporateNumber}`, {headers: this.defaultHeaders})
        .then(({body}) => body.json());
  }
}

module.exports.GbizinfoClient = GbizinfoClient;
