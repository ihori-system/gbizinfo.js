/**
 * gBizINFO REST API client
 * [API Document](https://info.gbiz.go.jp/hojin/swagger-ui.html)
 */
 export class GbizinfoClient {
  /**
   * @param options APIクライアントのオプション
   */
  constructor(options: GbizinfoClientOption)

  /**
   * gBizINFOから法人基本情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報
   */
  findByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから法人基本情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された法人基本情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報
   */
  findByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された法人基本情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから届出・認定情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCertificationUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および届出・認定情報
   */
  findCertificationByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから届出・認定情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCertificationUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findCertificationByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された届出・認定情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCertificationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および届出・認定情報
   */
  findCertificationByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された届出・認定情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCertificationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findCertificationByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから表彰情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCommendationUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および表彰情報
   */
  findCommendationByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから表彰情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getCommendationUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findCommendationByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された表彰情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCommendationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および表彰情報
   */
  findCommendationByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された表彰情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getCommendationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findCommendationByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから財務情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getFinanceUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および財務情報
   */
  findFinanceByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから財務情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getFinanceUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findFinanceByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された財務情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getFinanceUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および財務情報
   */
  findFinanceByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された財務情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getFinanceUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findFinanceByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから特許情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getPatentUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および特許情報
   */
  findPatentByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから特許情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getPatentUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findPatentByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された特許情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getPatentUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および特許情報
   */
  findPatentByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された特許情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getPatentUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findPatentByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから調達情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getProcurementUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および調達情報
   */
  findProcurementByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから調達情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getProcurementUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findProcurementByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された調達情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getProcurementUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および調達情報
   */
  findProcurementByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された調達情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getProcurementUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findProcurementByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから補助金情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getSubsidyUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および補助金情報
   */
  findSubsidyByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから補助金情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getSubsidyUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findSubsidyByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された補助金情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getSubsidyUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および補助金
   */
  findSubsidyByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された補助金情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getSubsidyUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および補助金情報
   */
  findSubsidyByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>

  /**
   * gBizINFOから職場情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getWorkplaceInformationUsingGET)
   * @param corporateNumber 法人番号
   * @returns 法人基本情報および職場情報
   */
  findWorkplaceByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>

  /**
   * gBizINFOから職場情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API/getWorkplaceInformationUsingGET)
   * @param corporateNumber 法人番号
   * @returns レスポンスボディ
   */
  findWorkplaceByCorporateNumberRaw(corporateNumber: string): Promise<unknown>

  /**
   * gBizINFOから期間内に追加/更新された職場情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getWorkplaceInformationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns 法人基本情報および職場情報
   */
  findWorkplaceByTimeRange(page: number, from: Date, to: Date): Promise<TimeRangeResponse>

  /**
   * gBizINFOから期間内に追加/更新された職場情報を取得します。
   * 
   * [APIドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html#!/gBizINFO_REST_API_(Period-specified_Search)/getWorkplaceInformationUpdateInfoUsingGET)
   * @param page 検索結果のページ番号
   * @param from 検索対象期間の開始日
   * @param to 検索対象期間の終了日
   * @returns レスポンスボディ
   */
  findWorkplaceByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>
}

/**
 * 届出・認定情報
 */
export interface Certification {
  category?: string
  dateOfApproval?: string
  enterpriseScale?: string
  expirationDate?: string
  governmentDepartments: string
  target?: string
  title: string
}

/**
 * 表彰情報
 */
export interface Commendation {
  category?: string
  dateOfCommendation?: string
  governmentDepartments: string
  target?: string 
  title: string
}

/**
 * 法人基本情報
 */
export interface Corporation {
  businessItems?: Array<string>
  businessSummary?: string
  capitalStock?: number
  /**
   * 届出・認定情報
   */
  certification?: Array<Certification>
  closeCause?: string
  closeDate?: string
  /**
   * 表彰情報
   */
  commendation?: Array<Commendation>
  companySizeFemale?: number
  companySizeMale?: number
  companyUrl?: string
  corporateNumber: string
  dateOfEstablishment?: string
  employeeNumber?: number
  /**
   * 財務情報
   */
  finance?: Finance
  foundingYear?: number
  kana?: string
  location?: string
  name: string
  nameEn?: string
  /**
   * 特許情報
   */
  patent?: Array<Patent>
  postalCode?: string
  /**
   * 調達情報
   */
  procurement?: Array<Procurement>
  representativeName?: string
  representativePosition?: string
  status: string
  /**
   * 補助金情報
   */
  subsidy?: Array<Subsidy>
  updateDate: string
  /**
   * 職場情報
   */
  workplace?: Workplace
}

/**
 * 財務情報
 */
export interface Finance {
  accountingStandards: string
  fiscalYearCoverPage: string
  majorShareholders: Array<MajorShareholder>
  managementIndex: Array<ManagementIndex>
}

export interface GbizinfoClientOption {
  /**
   * APIトークン
   * 
   * [Web API利用申請](https://info.gbiz.go.jp/hojin/api_registration/form)から申請・取得ができます。
   */
  token: string
}

export interface MajorShareholder {
  nameMajorShareholders: string
  shareholdingRatio: number
}

export interface ManagementIndex {
  capitalStockSummaryOfBusinessResults: number
  capitalStockSummaryOfBusinessResultsUnitRef: string
  grossOperatingRevenueSummaryOfBusinessResults?: number
  grossOperatingRevenueSummaryOfBusinessResultsUnitRef?: string
  netAssetSummaryOfBusinessResults: number
  netAssetsSummaryOfBusinessResultsUnitRef: string
  netIncomeLossSummaryOfBusinessResults: number
  netIncomeLossSummaryOfBusinessResultsUnitRef: string
  netPremiumsWrittenSummaryOfBusinessResultsIns?: number
  netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef?: string
  netSalesSummaryOfBusinessResults?: number
  netSalesSummaryOfBusinessResultsUnitRef?: string
  numberOfEmployees?: number
  numberOfEmployeesUnitRef?: string
  operatingRevenue1SummaryOfBusinessResults?: number
  operatingRevenue1SummaryOfBusinessResultsUnitRef?: string
  operatingRevenue2SummaryOfBusinessResults?: number
  operatingRevenue2SummaryOfBusinessResultsUnitRef?: string
  ordinaryIncomeLossSummaryOfBusinessResults: number
  ordinaryIncomeLossSummaryOfBusinessResultsUnitRef: string
  ordinaryIncomeSummaryOfBusinessResults?: number
  ordinaryIncomeSummaryOfBusinessResultsUnitRef?: string
  period: string
  totalAssetsSummaryOfBusinessResults: number
  totalAssetsSummaryOfBusinessResultsUnitRef: string
}

/**
 * 特許情報
 */
export interface Patent {
  applicationDate: string
  applicationNumber: string
  classifications: Array<PatentClassification>
  patentType: string
  title: string
}

export interface PatentClassification {
  name: string
  value: string
  japanese?: string
}

/**
 * 調達情報
 */
export interface Procurement {
  amount: number
  dateOfOrder?: string
  governmentDepartments: string
  jointSignatures?: Array<string>
  title: string
}

/**
 * 補助金情報
 */
export interface Subsidy {
  amount: string
  dateOfApproval: string
  governmentDepartments: string
  jointSignatures: Array<string>
  note: string
  subsidyResource: string
  target: string
  title: string
}

export interface TimeRangeResponse {
  /**
   * 法人基本情報
   */
  corporations: Array<Corporation>
  /**
   * 現在のページ番号
   */
  pageNumber: number
  /**
   * 総件数
   */
  totalCount: number
  /**
   * 総ページ数
   */
  totalPage: number
}

/**
 * 職場情報
 */
export interface Workplace {
  baseInformation?: WorkplaceBaseInformation
  compatibilityOfChildcareAndWork?: WorkplaceCompatibilityOfChildrenAndWork
  womenActivityInformation?: WorkplaceWomenActivityInformation
}

export interface WorkplaceBaseInformation {
  averageAge?: number
  averageContinuousServiceYears?: number
  averageContinuousServiceYearsFemale?: number
  averageContinuousServiceYearsMale?: number
  averageContinuousServiceYearsType?: string
  monthAveragePredeterminedOvertimeHours?: number
}

export interface WorkplaceCompatibilityOfChildrenAndWork {
  maternityLeaveAcquisitionNum?: number
  numberOfMaternityLeave?: number
  numberOfPaternityLeave?: number
  paternityLeaveAcquisitionNum?: number
}

export interface WorkplaceWomenActivityInformation {
  femaleShareOfManager?: number
  femaleShareOfOfficers?: number
  femaleWorkersProportion?: number
  femaleWorkersProportionType?: string
  genderTotalOfManager?: number
  genderTotalOfOfficers?: number
}
