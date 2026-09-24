<script setup lang="ts">
import { useQuizStore } from './stores/quiz'

const quiz = useQuizStore()
</script>

<template>
  <main class="container">

    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">
        Kuis<span>Pengetahuan</span>
      </div>

      <div class="nav-links">
        <a href="#">Beranda</a>
        <a href="#">Kuis</a>
        <a href="#">Papan Peringkat</a>
      </div>

      <button class="login-button">
        Mulai Kuis
      </button>
    </nav>

    <!-- Hero -->
    <section class="hero">

      <div class="hero-content">
        <p class="badge">
          UJI PENGETAHUANMU
        </p>

        <h1>
          Seberapa luas<br />
          <span>pengetahuanmu?</span>
        </h1>

        <p class="description">
          Tantang dirimu dengan berbagai pertanyaan,
          kumpulkan poin, dan jadilah yang terbaik
          di papan peringkat.
        </p>

        <button class="start-button">
          Mulai Kuis →
        </button>
      </div>

      <div class="hero-card">
        <div class="card-title">
          <span>🏆</span>
          Papan Peringkat
        </div>

        <div
          v-for="(player, index) in quiz.topPlayers"
          :key="player.name"
          class="player"
        >
          <div class="rank">
            {{ index + 1 }}
          </div>

          <div class="player-name">
            {{ player.name }}
          </div>

          <div class="score">
            {{ player.score }}
          </div>
        </div>

        <button class="leaderboard-button">
          Lihat Papan Peringkat
        </button>
      </div>

    </section>

    <!-- Categories -->
    <section class="categories">

      <div class="section-header">
        <div>
          <p class="section-label">PILIH KATEGORI</p>
          <h2>Mulai tantanganmu</h2>
        </div>
      </div>

      <div class="category-grid">

        <div class="category">
          <div class="icon">🌎</div>
          <h3>Pengetahuan Umum</h3>
          <p>Uji wawasan umum kamu.</p>
        </div>

        <div class="category">
          <div class="icon">🔬</div>
          <h3>Sains</h3>
          <p>Tantang pengetahuan sains.</p>
        </div>

        <div class="category">
          <div class="icon">📚</div>
          <h3>Sejarah</h3>
          <p>Seberapa jauh kamu mengenal sejarah?</p>
        </div>

        <div class="category">
          <div class="icon">💻</div>
          <h3>Teknologi</h3>
          <p>Uji wawasan dunia teknologi.</p>
        </div>

      </div>

    </section>

  </main>
</template>