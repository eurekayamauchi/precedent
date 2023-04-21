
import Accounts from "@/components/home/accounts"
import Amount from "@/components/home/amount"
import { Account, Accounts as AccountsType, getAccounts } from '@/app/api/accounts/route'

const searchAccounts = () => fetch("http://localhost:3000/api/accounts").then(async (res) => {
  console.log(res)
  if(!res){
    return getAccounts()
  }
  const data = await res.json();
  return data;
});


export default async function Content() {
    const res = await searchAccounts()
    const accounts:AccountsType = res && res.accounts ? res.accounts : { list:[]}
    const accountList:Account[] = accounts.list;

    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")
    console.log(accountList)
    console.log("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■")

    return (
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {/* @ts-expect-error Server Component */}
        <Accounts accountList={accountList}/>
        {/* @ts-expect-error Server Component */}
        <Amount accountList={accountList}/>
        </div>
    );
}
