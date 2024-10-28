import Link from "next/link"
import {  ExternalLinkIcon } from "lucide-react"

export default function Navbar(){
    return(
        <div className="sticky top-0 z-30 border-b bg-background px-4 sm:px-6">
            <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
            <div className="flex gap-4">
                <Link href="/" className="flex items-center gap-2">
                <ExternalLinkIcon className="h-6 w-6" />
                    <span className="font-bold">sharejson.</span>
                </Link>
                <nav>
                    <Link href="/dashboard" className="text-sm font-medium text-muted-foreground">Dashboard</Link>
                </nav>
           
            <h1>Logo</h1>         
            <h1>Login Button</h1> 
            </div>        
            </div>
        </div>


    )
}