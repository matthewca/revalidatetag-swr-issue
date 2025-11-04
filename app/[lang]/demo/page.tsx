import { getDemoData } from '@/app/common/demo';
import { Suspense } from 'react'

async function ViewDataWithLang({ params }: { params: PageProps<'/[lang]/demo'>['params'] }) {
    const lang = (await params).lang
    const data = await getDemoData()
    return (
        <>
            <div className="mb-2">
                Value: <span className="font-mono">{data.value}</span>
            </div>
            <div className="mb-2">
                Timestamp: <span className="font-mono">{new Date(data.timestamp).toLocaleTimeString()}</span>
            </div>
            <div className="mb-2">
                Lang: <span className="font-mono">{lang}</span>
            </div>
        </>
    )
}

export default async function Page(props: PageProps<'/[lang]/demo'>) {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">Demo revalidateTag SWR Issue</h1>
            <Suspense><ViewDataWithLang params={props.params} /></Suspense>
        </main>
    )
}
