import { CompreFace } from '@exadel/compreface-js-sdk'

import { api_key, port, server } from '../config'

const compreFace = new CompreFace(server, port)
export const recognitionService = compreFace.initFaceRecognitionService(
  api_key as string,
)
