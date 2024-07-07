'use client'
import './globals.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="main">
      <section className="homepage-overview">
        <div className="homepage-main-container">
          <h1 className="homepage-title">
            NFL Guide <span>&#127944;</span>
          </h1>
          <p className="homepage-subtitle">
            A place for you to learn & explore more about American Football
          </p>
        </div>
        <p className="homepage-detail__text">
          NFL Guide is your go-to website for eager new fans to learn more about
          the game, players and the teams
        </p>
      </section>
    </main>
  )
}
