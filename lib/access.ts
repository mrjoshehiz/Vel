import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '@/app/chatgpt-auth';
export async function isAdmin(){const user=await getChatGPTUser();const admin=(env as typeof env&{ADMIN_EMAIL?:string}).ADMIN_EMAIL;return !!user&&!!admin&&user.email.toLowerCase()===admin.toLowerCase()}
