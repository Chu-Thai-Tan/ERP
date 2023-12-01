import { CompreFace } from "@exadel/compreface-js-sdk";

const server = 'http://localhost';
const port = 8000;
const api_key = process.env.API_KEY ?? 'c92277cb-8381-40f7-a0c3-d60b1b74e450';

const compreFace = new CompreFace(server, port);
export const recognitionService = compreFace.initFaceRecognitionService(api_key);
