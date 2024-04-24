import TabScreen from "@/custom_components/TabScreen";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession()

  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-between p-4'>
      <TabScreen session={session} />
    </main>
  );
}
