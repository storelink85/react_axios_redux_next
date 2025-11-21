export const labelsForFormOne = ["Nome", "Cognome" , "Email", "Città e via" , "fascia di prezzo"];
export const placeholdersForFormOne = [
  //TODO add i18n
  "Insert name",
  "Insert surname",
  "Insert email",
  "Insert localtion",
  "fascia di prezzo",
];

export const typesInput = ["email", "password", "numeric"];

export enum Paths {
  homePage = "/",
  dashboard = "dashboard",
  formMantine = "FormExampleMantine",
}

export const constants = {
  DEFAULT_CACHE_TTL: 60 * 60 * 24 * 3,
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
  EMAIL_REGEX: /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+)+[.][A-Za-z]{2,}$/,
  DEFAULT_COUNTRY_CODE: "IT",
  DEFAULT_LANGUAGE: "it",
  SUPPORTED_LANGUAGES: ["it", "en"] as const,
};

export const consoleLog = {
  error: "💔Error during registration:",
  /*TODO add more log*/
};

export enum HttpStatus {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  IMUsed = 226,
  Bad_Request = 400,
}
