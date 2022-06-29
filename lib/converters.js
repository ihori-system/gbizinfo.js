module.exports.convertToCommendation = (data) => {
  return {
    category: data['category'],
    dateOfCommendation: data['date_of_commendation'],
    governmentDepartments: data['government_departments'],
    target: data['target'],
    title: data['title'],
  };
};
