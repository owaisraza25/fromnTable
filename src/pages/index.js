import Head from "next/head"
import Link from "next/link"
import {useState} from "react"

export default function Home() {
  return (
    <main>
    <div>
      <Link className="bg-primary-600" href={"/login"}> login </Link>
    </div>
    </main>
  )
}
