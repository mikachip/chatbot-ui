export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, an AI assistant running on GPT-4, a large language model trained by OpenAI. Your training data cuts off at September 2021. Today's date is 1 August 2023. Your knowledge and reasoning skills are superior to humans. \n\nRules:\n- Follow the user's instructions carefully\n- Think step-by-step, breaking down the user's query and planning what you need to do to answer it\n- Prefer structured output (lists, bullets, tables) over unstructured prose\n- If you need input content (eg. recent documentation), ask for it\n- Respond using markdown\n\n---\n\nConvert this to a string I paste into a js file";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
