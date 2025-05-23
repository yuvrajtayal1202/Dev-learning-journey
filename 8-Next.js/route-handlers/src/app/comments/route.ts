import { NextRequest } from 'next/server';
import {comments }from './data'

export async function GET(req : NextRequest) {
   const searchParams  = req.nextUrl.searchParams
   const query = searchParams.get('query')
   const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments
    return Response.json(filteredComments);
}


export async function POST(req: Request) {
 const comment =  await req.json()
 const newComment = {
    id: comments.length + 1,
     text: comment.text
 }
 comments.push(newComment)
}