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
      <div className="exploring-outer-container">
        <h2 className="exploring-title">
          Huddle Up and See What We Got To Offer!
        </h2>
        <section className="exploring-main-conatiner">
          <div className="exploring-container">
            <div className="exploring-wrapper">
              <div className="exploring-banner-image"></div>
              <h1>Rules</h1>
              <p>Know more about the rules</p>
            </div>

            <div className="button-wrapper">
              <button className="exploring-button-outline exploring-button">
                Go to Quiz
              </button>
              <button className="exploring-button-fill exploring-button">
                Learn more
              </button>
            </div>
          </div>

          <div className="exploring-container">
            <div className="exploring-wrapper">
              <div className="exploring-banner-image2"></div>
              <h1>Fantasy Team</h1>
              <p>Put together your fantasy nfl team</p>
            </div>

            <div className="button-wrapper">
              <button className="exploring-button-outline exploring-button">
                Go to Quiz
              </button>
              <button className="exploring-button-fill exploring-button">
                Learn more
              </button>
            </div>
          </div>

          <div className="exploring-container">
            <div className="exploring-wrapper">
              <div className="exploring-banner-image3"></div>
              <h1>Quiz</h1>
              <p>Put your NFL knowlage to the test</p>
            </div>

            <div className="button-wrapper">
              <button className="exploring-button-outline exploring-button">
                Go to Quiz
              </button>
              <button className="exploring-button-fill exploring-button">
                Learn more
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
