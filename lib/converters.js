const convertToCertification = (data) => {
  return {
    category: data['category'],
    dateOfApproval: data['date_of_approval'],
    enterpriseScale: data['enterprise_scale'],
    expirationDate: data['expiration_date'],
    governmentDepartments: data['government_departments'],
    target: data['target'],
    title: data['title'],
  };
};

const convertToCommendation = (data) => {
  return {
    category: data['category'],
    dateOfCommendation: data['date_of_commendation'],
    governmentDepartments: data['government_departments'],
    target: data['target'],
    title: data['title'],
  };
};

const convertToCorporate = (data) => {
  return {
    businessItems: data['business_items'],
    businessSummary: data['business_summary'],
    capitalStock: data['capital_stock'],
    certification: data['certification'] != null? data['certification'].map(convertToCertification) : undefined,
    closeCause: data['close_cause'],
    closeDate: data['close_date'],
    commendation: data['commendation'] != null? data['commendation'].map(convertToCommendation) : undefined,
    companySizeFemale: data['company_size_female'],
    companySizeMale: data['company_size_male'],
    companyUrl: data['company_url'],
    corporateNumber: data['corporate_number'],
    dateOfEstablishment: data['date_of_establishment'],
    employeeNumber: data['employee_number'],
    finance: data['finance'] != null? convertToFinance(data['finance']) : undefined,
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
};

const convertToFinance = (data) => {
  return {
    accountingStandards: data['accounting_standards'],
    fiscalYearCoverPage: data['fiscal_year_cover_page'],
    majorShareholders: data['major_shareholders'] != null? data['major_shareholders'].map(convertToMajorShareholder) : undefined,
    managementIndex: data['management_index'] != null? data['management_index'].map(convertToManagementIndex) : undefined,
  };
};

const convertToMajorShareholder = (data) => {
  return {
    nameMajorShareholders: data['name_major_shareholders'],
    shareholdingRatio: data['shareholding_ratio'],
  };
};

const convertToManagementIndex = (data) => {
  return {
    capitalStockSummaryOfBusinessResults: data['capital_stock_summary_of_business_results'],
    capitalStockSummaryOfBusinessResultsUnitRef: data['capital_stock_summary_of_business_results_unit_ref'],
    grossOperatingRevenueSummaryOfBusinessResults: data['gross_operating_revenue_summary_of_business_results'],
    grossOperatingRevenueSummaryOfBusinessResultsUnitRef: data['gross_operating_revenue_summary_of_business_results_unit_ref'],
    netAssetSummaryOfBusinessResults: data['net_assets_summary_of_business_results'],
    netAssetsSummaryOfBusinessResultsUnitRef: data['net_assets_summary_of_business_results_unit_ref'],
    netIncomeLossSummaryOfBusinessResults: data['net_income_loss_summary_of_business_results'],
    netIncomeLossSummaryOfBusinessResultsUnitRef: data['net_income_loss_summary_of_business_results_unit_ref'],
    netPremiumsWrittenSummaryOfBusinessResultsIns: data['net_premiums_written_summary_of_business_results_ins'],
    netPremiumsWrittenSummaryOfBusinessResultsInsUnitRef: data['net_premiums_written_summary_of_business_results_ins_unit_ref'],
    netSalesSummaryOfBusinessResults: data['net_sales_summary_of_business_results'],
    netSalesSummaryOfBusinessResultsUnitRef: data['net_sales_summary_of_business_results_unit_ref'],
    numberOfEmployees: data['number_of_employees'],
    numberOfEmployeesUnitRef: data['number_of_employees_unit_ref'],
    operatingRevenue1SummaryOfBusinessResults: data['operating_revenue1_summary_of_business_results'],
    operatingRevenue1SummaryOfBusinessResultsUnitRef: data['operating_revenue1_summary_of_business_results_unit_ref'],
    operatingRevenue2SummaryOfBusinessResults: data['operating_revenue2_summary_of_business_results'],
    operatingRevenue2SummaryOfBusinessResultsUnitRef: data['operating_revenue2_summary_of_business_results_unit_ref'],
    ordinaryIncomeLossSummaryOfBusinessResults: data['ordinary_income_loss_summary_of_business_results'],
    ordinaryIncomeLossSummaryOfBusinessResultsUnitRef: data['ordinary_income_loss_summary_of_business_results_unit_ref'],
    ordinaryIncomeSummaryOfBusinessResults: data['ordinary_income_summary_of_business_results'],
    ordinaryIncomeSummaryOfBusinessResultsUnitRef: data['ordinary_income_summary_of_business_results_unit_ref'],
    period: data['period'],
    totalAssetsSummaryOfBusinessResults: data['total_assets_summary_of_business_results'],
    totalAssetsSummaryOfBusinessResultsUnitRef: data['total_assets_summary_of_business_results_unit_ref'],
  };
};

module.exports.convertToCorporate = convertToCorporate;
