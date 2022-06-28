export interface GbizinfoClientOption {
  token: string
}

export interface Corporation {
  businessItems?: Array<string>
  businessSummary?: string
  capitalStock?: number
  closeCause?: string
  closeDate?: string
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
    totalCount: number,
    totalPage: number,
    pageNumber: number,
    corporations: Array<Corporation>
  }>
  findByTimeRangeRaw(page: number, from: Date, to: Date): Promise<unknown> 
}
