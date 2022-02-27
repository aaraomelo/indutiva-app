
export function required(value: string) {
  return !!(value.length)
}

export function isValidUrl(value: string) {
  let url;
  try {
    url = new URL(value);
  } catch (_) {
    return false;  
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

export const haveMessages = (validations: any) =>
  Object.keys(validations)
    .map((field) => validations[field].length === 0)
    .reduce((acc, next) => acc && next);

export function validateModel(model: any, validations: any, validate: any, field?: any) {
  if (field) {
    return {
      ...validations,
      [field]: validate({ field, value: model[field] })
    }
  } else {
    let validationsCopy = {
      ...validations
    }
    Object.keys(model).forEach((fieldModel: string) =>
      validationsCopy[fieldModel] = validate({ field: fieldModel, value: model[fieldModel] })
    );
    return validationsCopy
  }
}
