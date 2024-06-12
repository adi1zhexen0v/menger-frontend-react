export interface IGPTWordRequest {
  word: string;
}

export interface IGPTWordTranscriptResponse {
  transcription: string;
}

export interface IGPTWordTaskWrongOptionsResponse {
  wrongOptions: string[];
}