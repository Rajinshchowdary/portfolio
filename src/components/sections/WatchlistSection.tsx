"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CURRENTLY_WATCHING,
  FAVORITE_FILMS,
  ANIME_WATCHLIST,
  MUSIC_ROTATION,
  RECOMMENDED_BOOKS,
} from "@/lib/constants";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

type MediaTab =
  | "watching"
  | "films"
  | "anime"
  | "music"
  | "books";

export default function WatchlistSection() {
  const [activeTab, setActiveTab] = useState<MediaTab>("watching");

  const tabs: { id: MediaTab; label: string; icon: string }[] = [
    { id: "watching", label: "Currently Watching", icon: "📺" },
    { id: "films", label: "Favorite Films", icon: "🎬" },
    { id: "anime", label: "Anime", icon: "⛩️" },
    { id: "music", label: "Music Rotation", icon: "🎵" },
    { id: "books", label: "Recommended", icon: "📚" },
  ];

  return (
    <section id="watchlist" className="relative py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-accent font-mono">
            005 — Media
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            What I&apos;m
            <br />
            <span className="gradient-text">consuming.</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl">
            A living snapshot of the media shaping my perspectives right now —
            always evolving, never static.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          className="mt-12 flex flex-wrap gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300 cursor-hover ${
                activeTab === tab.id
                  ? "text-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="media-tab"
                  className="absolute inset-0 bg-surface-elevated border border-border rounded-xl -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {/* Currently Watching */}
          {activeTab === "watching" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CURRENTLY_WATCHING.map((item) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-surface border border-border hover-card"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-green-400 font-mono">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-amber-400/80 font-mono">
                    {item.rating}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Favorite Films */}
          {activeTab === "films" && (
            <div className="grid gap-3">
              {FAVORITE_FILMS.map((film, i) => (
                <div
                  key={film.title}
                  className="group flex items-center gap-6 p-4 rounded-xl hover:bg-surface transition-colors duration-300"
                >
                  <span className="text-xs text-muted font-mono w-6 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                      {film.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted hidden sm:block">
                    {film.genre}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    {film.year}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Anime */}
          {activeTab === "anime" && (
            <div className="grid gap-3">
              {ANIME_WATCHLIST.map((anime) => (
                <div
                  key={anime.title}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-300"
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      anime.status === "completed"
                        ? "bg-green-400"
                        : anime.status === "watching"
                        ? "bg-amber-400 animate-pulse"
                        : "bg-muted/40"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                      {anime.title}
                    </h3>
                  </div>
                  <span className="text-xs text-muted capitalize hidden sm:block">
                    {anime.status}
                  </span>
                  <span className="text-sm text-amber-400/80 font-mono">
                    {anime.rating}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Music */}
          {activeTab === "music" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MUSIC_ROTATION.map((artist) => (
                <div
                  key={artist.artist}
                  className="group p-5 rounded-2xl bg-surface border border-border hover-card"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/10 flex items-center justify-center mb-3">
                    <span className="text-lg">🎧</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {artist.artist}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{artist.genre}</p>
                </div>
              ))}
            </div>
          )}

          {/* Recommended Books */}
          {activeTab === "books" && (
            <div className="grid gap-4 sm:grid-cols-2">
              {RECOMMENDED_BOOKS.map((book) => (
                <div
                  key={book.title}
                  className="group p-6 rounded-2xl bg-surface border border-border hover-card"
                >
                  <span className="tag text-[10px] mb-3">{book.topic}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{book.author}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Alive indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-muted tracking-wide">
            Updated regularly — this section is always evolving
          </span>
        </motion.div>
      </div>
    </section>
  );
}
