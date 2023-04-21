import { NextResponse } from 'next/server';

export type UserList = {
    count: number;
    list: User[];
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export const get = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const members: User[] = await response.json();
    return NextResponse.json({ members });
};
  