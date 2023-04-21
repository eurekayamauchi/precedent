'use client'; 

import { Account, Accounts, getAccounts } from '@/app/api/accounts/route'
import { Suspense } from 'react';

export default function Accounts(accountList:Account[]) {
  console.log(accountList)
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md md:col-span-2`}
    >
      <Suspense fallback={<img src='loading.gif'/>}>
      {accountList.length > 0 && (
      <table className="min-w-full">
        <thead className="bg-blue-450 border-b text-current" >
          <tr>
            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
              #
            </th>
            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
              口座名
            </th>
            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
              貯金額
            </th>
            <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
              リンク
            </th>
          </tr>
        </thead>
        <tbody>
        {accountList.map((account:Account, index:number) => (
          <tr className={index%2 == 0 ? "bg-gray-300 border-b" : "bg-white border-b"} key={account.id} draggable={true}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" style={{color:account.color}}>
              ●
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {account.name}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {account.amount}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {account.link && (
                <a href={account.link} target="_blank" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{account.link}</a>
              )}
              {!account.link && (
                <p>-</p>
              )}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      )}
      {accountList.length == 0 && (
        <p>口座がありません</p>
      )}
      </Suspense>
    </div>
  );
}
