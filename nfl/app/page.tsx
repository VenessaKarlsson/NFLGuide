'use client'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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

      {/* Banner */}
      <section className="banner__section">
        <div className="banner__wrapper">
          <div className="banner__image">
            <h2 className="banner-title">
              We simplify the game of American football
            </h2>
            <h5 className="banner-subtitle">
              Our goal is to enrich football fans
            </h5>
            <div className="banner-button-wrapper">
              <Link href={'/about'}>
                <button type="button" className="banner-button">
                  Learn more <ArrowRight className="banner-arrow" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exploring */}
      <section className="exploring__section">
        <h2 className="exploring-title">
          Huddle Up and Discover What We Have to Offer!
        </h2>
        <div className="exploring-wrapper">
          <h2 className="exploring-image__title">Players</h2>
          <p className="exploring-description">
            Think You Know Your NFL Players? Put Your Knowledge to the Test with
            Our Quizzes!
          </p>
          <div className="exploring-image__container"></div>
          <Link href="/quiz" className="exploring-button__center">
            <button className="exploring-button">Go to quiz</button>
          </Link>
        </div>
        <div className="right-side__container">
          <h2 className="exploring-title__right">Teams</h2>
          <p className="exploring-description__right">
            Search and Dive into Your Favorite Teams and Find Fun Facts!{' '}
          </p>
          <div className="exploring-image__container__right"></div>
          <Link href="/teams" className="exploring-button__center">
            <button className="exploring-button__right">Search Teams</button>
          </Link>
        </div>

        <div className="right-side__container">
          <h2 className="exploring-title__last">NFL Rules</h2>
          <p className="exploring-description">
            Lost in the playbook? We’ve broken down the rules of American
            football so you can understand the game better.
          </p>
          <div className="exploring-image__container__last"></div>
          <Link href="/about" className="exploring-button__center">
            <button className="exploring-button__last">Go to rules</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
