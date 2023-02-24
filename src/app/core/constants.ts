import {SearchConfig} from "../models/search-config";

export const URL = 'https://recipe-backend-test.vercel.app/'

export const initialSearchConfig: SearchConfig = {
  minVal: 0,
  maxVal: 2000,
  minDur: 0,
  maxDur: 210,
  topics: []
}
export const maxNewDocuments = 5
