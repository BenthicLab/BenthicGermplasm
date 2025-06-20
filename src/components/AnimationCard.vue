<script>
export default {
  mounted() {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/assets/js/animation.js";
    document.body.appendChild(script);
  },
};
</script>

<template>
  <div>
    <canvas class="orb-canvas"></canvas>
    <!-- Overlay -->
    <div class="overlay">
      <!-- Overlay inner wrapper -->
      <div class="overlay__inner">
        <!-- Title -->
        <h1 class="overlay__title">
          <span>Polychaete Taxonomy Database</span>
        </h1>
        <!-- Description -->
        <p class="overlay__description">
          The website of <strong>Polychaete Taxonomy Database</strong> is
          developed based on
          <strong>Vue.JS (version=3), Vite.JS (version=3), and Node.JS
            (version=16)</strong>, the UI (User Interface) design by <strong>Element-plus</strong>.
        </p>
        <p class="overlay__description">
          The data storage and data
          <strong>API (Application Programming Interface) based on SQL
            database</strong>, which served by <strong>Python Flask Server</strong>. The
          <strong>Axios.JS support the GET, POST, PUT and DELETE</strong>
          methods for communication of web-end and server-end.
        </p>
        <!-- Buttons -->
        <!-- <div class="overlay__btns">
          <button class="overlay__btn overlay__btn--colors">
            <span>Randomise Colors</span>
            <span class="overlay__btn-emoji">🎨</span>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --dark-color: hsl(var(--hue), 100%, 9%);
  --light-color: hsl(var(--hue), 95%, 98%);
  --base: hsl(var(--hue), 95%, 50%);
  --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%);
  --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%);

  --font-family: "Poppins", system-ui;

  --bg-gradient: linear-gradient(to bottom,
      hsl(var(--hue), 95%, 99%),
      hsl(var(--hue), 95%, 84%));
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  max-width: 1920px;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 2rem;
  font-family: var(--font-family);
  color: var(--dark-color);
  background: var(--bg-gradient);
}

.orb-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

strong {
  font-weight: 600;
}

.overlay {
  width: 100%;
  max-width: 1140px;
  max-height: 640px;
  padding: 8rem 6rem;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.375);
  box-shadow: 0 0.75rem 2rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

.overlay__inner {
  max-width: 36rem;
}

.overlay__title {
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
  color: #000000;
}

.text-gradient {
  background-image: linear-gradient(45deg,
      var(--base) 25%,
      var(--complimentary2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.overlay__description {
  font-size: 1rem;
  line-height: 2rem;
  margin-bottom: 3rem;
  text-align: justify;
  color: #000000;
}

.overlay__btns {
  width: 100%;
  max-width: 30rem;
  display: flex;
}

.overlay__btn {
  width: 50%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--light-color);
  background: var(--dark-color);
  border: none;
  border-radius: 0.5rem;
  transition: transform 150ms ease;
  outline-color: hsl(var(--hue), 95%, 50%);
}

.overlay__btn:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.overlay__btn--transparent {
  background: transparent;
  color: var(--dark-color);
  border: 2px solid var(--dark-color);
  border-width: 2px;
  margin-right: 0.75rem;
}

.overlay__btn-emoji {
  margin-left: 0.375rem;
}

a {
  text-decoration: none;
  color: var(--dark-color);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Not too many browser support this yet but it's good to add! */
@media (prefers-contrast: high) {
  .orb-canvas {
    display: none;
  }
}

@media only screen and (max-width: 1140px) {
  .overlay {
    padding: 8rem 4rem;
  }
}

@media only screen and (max-width: 840px) {
  body {
    padding: 1.5rem;
  }

  .overlay {
    padding: 4rem;
    height: auto;
  }

  .overlay__title {
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }

  .overlay__description {
    font-size: 0.875rem;
    line-height: 1.5rem;
    margin-bottom: 2.5rem;
  }
}

@media only screen and (max-width: 600px) {
  .overlay {
    padding: 1.5rem;
  }

  .overlay__btns {
    flex-wrap: wrap;
  }

  .overlay__btn {
    width: 100%;
    font-size: 0.75rem;
    margin-right: 0;
  }

  .overlay__btn:first-child {
    margin-bottom: 1rem;
  }
}
</style>
