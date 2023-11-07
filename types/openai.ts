import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
  requestLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  GPT_4 = 'gpt-4',
  GPT_4_0314 = 'gpt-4-0314',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_1106 = 'gpt-4-1106-preview',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'gpt-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'gpt-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16000,
    requestLimit: 12000,
  },
  [OpenAIModelID.GPT_3_5_AZ]: {
    id: OpenAIModelID.GPT_3_5_AZ,
    name: 'gpt-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
    requestLimit: 3000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'gpt-4',
    maxLength: 24000,
    tokenLimit: 8000,
    requestLimit: 6000,
  },
  [OpenAIModelID.GPT_4_0314]: {
    id: OpenAIModelID.GPT_4,
    name: 'gpt-4-0314',
    maxLength: 24000,
    tokenLimit: 8000,
    requestLimit: 6000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'gpt-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
    requestLimit: 24000,
  },
  [OpenAIModelID.GPT_4_1106]: {
    id: OpenAIModelID.GPT_4_1106,
    name: 'gpt-4-1106-preview',
    maxLength: 512000,
    tokenLimit: 128000,
    requestLimit: 12000,
  },
};
