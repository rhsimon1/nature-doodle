import { pinata } from '../../../../utils/config';
import { NextResponse } from 'next/server';
export async function GET(request) {
  try {
    const files = await pinata.files.public.list();
    return NextResponse.json(files, { status: 200 });
  } catch (e) {
    throw new Error();
  }
}
