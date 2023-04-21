import { NextRequest, NextResponse } from 'next/server';

export type Accounts = {
  list: Account[]
}

export type Account = {
    id : number,
    name : string,
    color : string,
    amount : number,
    link : string
}

let test1:Account = {
    id: 0,
    name: 'name0',
    color: 'red',
    amount: 100,
    link: 'https://google.com'
}
let test2:Account = {
    id: 1,
    name: 'name1',
    color: 'blue',
    amount: 100,
    link: ''
}
let test3:Account = {
    id: 2,
    name: 'name2',
    color: 'yellow',
    amount: 100,
    link: ''
}

let list:Account[] = [];
list.push(test1)
list.push(test2)
list.push(test3)

let result:Accounts = {
    list:list
}

export const getAccounts = () => {
  return NextResponse.json({accounts: result});
}

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({accounts:result});
}