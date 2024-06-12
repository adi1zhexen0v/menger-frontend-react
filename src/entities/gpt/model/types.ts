export interface IGPTWordRequest {
  word: string;
}

export interface IGPTWordTranscriptResponse {
  transcription: string;
}

export interface IGPTWordTaskWrongOptionsResponse {
  wrongOptions: string[];
}

export interface IGPTSentenceTaskWrongOptionsRequest {
  sentence: string;
  numberOfWrongOptions: number;
}

export interface IGPTSentenceTaskWrongOptionsResponse {
  wrongOptions: string[];
}