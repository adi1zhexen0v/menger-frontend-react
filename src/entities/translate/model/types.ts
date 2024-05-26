export interface ITranslateRequest {
  text: string;
}

export interface ITranslateResponse {
  translatedText: string;
  detectedSourceLanguage: string;
}