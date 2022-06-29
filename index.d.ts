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
  foundingYear?: number
  kana?: string
  location?: string
  name: string
  nameEn?: string
  postalCode?: string
  representativeName?: string
  representativePosition?: string
  status: string
  updateDate: string
}

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
