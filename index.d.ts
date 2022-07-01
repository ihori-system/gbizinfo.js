/**
 * interfaces
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

export interface Commendation {
  category?: string
  dateOfCommendation?: string
  governmentDepartments: string
  target?: string 
  title: string
}

export interface Corporation {
  businessItems?: Array<string>
  businessSummary?: string
  capitalStock?: number
  certification?: Array<Certification>
  closeCause?: string
  closeDate?: string
  commendation?: Array<Commendation>
  companySizeFemale?: number
  companySizeMale?: number
  companyUrl?: string
  corporateNumber: string
  dateOfEstablishment?: string
  employeeNumber?: number
  finance?: Finance
  foundingYear?: number
  kana?: string
  location?: string
  name: string
  nameEn?: string
  postalCode?: string
  procurement?: Array<Procurement>
  representativeName?: string
  representativePosition?: string
  status: string
  updateDate: string
}

export interface Finance {
  accountingStandards: string
  fiscalYearCoverPage: string
  majorShareholders: Array<MajorShareholder>
  managementIndex: Array<ManagementIndex>
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

export interface Procurement {
  amount: number
  dateOfOrder?: string
  governmentDepartments: string
  jointSignatures?: Array<string>
  title: string
}

/**
 * classes
 */
export class GbizinfoClient {
  constructor(options: GbizinfoClientOption)

  findByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>
  findByCorporateNumberRaw(corporateNumber: string): Promise<unknown>
  findByTimeRange(page: number, from: Date, to: Date): Promise<{
    totalCount: number
    totalPage: number
    pageNumber: number
    corporations: Array<Corporation>
  }>
  findByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>
  findCommendationByTimeRange(page: number, from: Date, to: Date): Promise<{
    totalCount: number
    totalPage: number
    pageNumber: number
    corporations: Array<Corporation>
  }>
  findCommendationByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown>
}

export interface GbizinfoClientOption {
  token: string
}
