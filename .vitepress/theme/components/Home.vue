<template>
  <div class="home">
    <section class="profile-card">
      <img :src="avatarUrl" alt="Maribbit头像" class="avatar" />
      <h1 class="name">Maribbit</h1>
      <p class="subtitle">海兔的技术分享</p>
      <div class="actions">
        <a href="/projects/" class="action-button primary">我的项目</a>
        <a href="/about" class="action-button secondary">关于我</a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  const avatarUrl = new URL("./avatar.webp", import.meta.url).href;
</script>

<style scoped>
  .home {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 1.5rem;
  }

  .profile-card {
    width: min(480px, 100%);
    padding: 3rem 2.5rem;
    text-align: center;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    object-fit: cover;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  }

  .name {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
    color: var(--vp-c-text-1);
  }

  .subtitle {
    margin: 0.75rem 0;
    font-size: 1.1rem;
    color: var(--vp-c-text-2);
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
  }

  .action-button {
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .primary {
    background: var(--vp-c-brand-1);
    color: #fff;
    box-shadow: 0 10px 25px rgba(44, 130, 201, 0.3);
  }

  .primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(44, 130, 201, 0.35);
  }

  .secondary {
    border: 1px solid var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
  }

  .secondary:hover {
    background: rgba(44, 130, 201, 0.1);
  }

  @media (max-width: 640px) {
    .home {
      padding: 3rem 1.25rem;
    }

    .profile-card {
      padding: 2.5rem 2rem;
    }

    .actions {
      flex-direction: column;
    }

    .action-button {
      width: 100%;
    }
  }
</style>
