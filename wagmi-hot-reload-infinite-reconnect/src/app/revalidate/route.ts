import { revalidatePath } from "next/cache"

export const revalidate = 0

export async function GET() {
  revalidatePath('/', 'layout')
  return new Response()
}
