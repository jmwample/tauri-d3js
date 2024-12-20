# Tauri + D3js Playground

<p>
  <a href="https://github.com/jmwample/tauri-d3js/releases">
    <img src="https://img.shields.io/github/v/release/jmwample/tauri-d3js?include_prereleases" alt="Latest Build">
  </a>
  <a href="https://github.com/jmwample/tauri-d3js/actions/workflows/publish.yml">
    <img src="https://github.com/jmwample/tauri-d3js/actions/workflows/publish.yml/badge.svg" alt="Build Status">
  </a>
  <a href="https://doc.rust-lang.org/1.6.0/complement-project-faq.html#why-dual-mitasl2-license">
    <img src="https://img.shields.io/badge/License-MIT%2FApache--2.0-blue" alt="License: MIT/Apache 2.0">
  </a>
</p>

## Introduction

A personal toy example project using:

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install Dependencies

Install package dependecies

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

> This project uses [pnpm](https://pnpm.io/) as its package manager. To install dependecies:

```sh
$ pnpm install
```

## Usage

Let's run!

```sh
$ pnpm tauri dev
```

To build you can use the `tauri build` command. I develop on Ubuntu 22.04 which
results in the a bundled `.deb` and `.AppImage`.

```sh
$ pnpm tauri build
$ tree src-tauri/target/release/bundle/ -L 2
src-tauri/target/release/bundle/
├── appimage
│   ├── build_appimage.sh
│   ├── tauri-d3js_0.1.0_amd64.AppImage
│   └── tauri-d3js.AppDir
└── deb
    ├── tauri-d3js_0.1.0_amd64
    └── tauri-d3js_0.1.0_amd64.deb
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Tech Stack (approx.)


<div align="center">
    <a href="https://reactjs.org/">
        <image src="https://img.shields.io/static/v1?label=React&message=^18&style=for-the-badge&labelColor=FFFFFF&logo=react&color=61DAFB"/>
    </a>
    <a href="https://www.typescriptlang.org/">
        <image src="https://img.shields.io/static/v1?label=TypeScript&message=^5&style=for-the-badge&labelColor=FFFFFF&logo=typescript&color=3178C6"/>
    </a>
    <a href="https://tailwindcss.com/">
        <image src="https://img.shields.io/static/v1?label=Tailwind%20CSS&message=^3&style=for-the-badge&labelColor=FFFFFF&logo=tailwindcss&color=06B6D4"/>
    </a>
</div>

<div align="center">
    <a href="https://vitejs.dev/">
        <image src="https://img.shields.io/static/v1?label=Vite&message=^4&style=for-the-badge&labelColor=FFFFFF&logo=vite&color=646CFF"/>
    </a>
    <a href="https://tauri.app/">
        <image src="https://img.shields.io/static/v1?label=Tauri&message=^1&style=for-the-badge&labelColor=FFFFFF&logo=tauri&color=FFC131"/>
    </a>
</div>

<div align="center">
    <a href="https://tauri.app/">
        <img src = "https://github.com/RoyRao2333/template-tauri-vite-react-ts-tailwind/assets/31413093/91cdcd1b-2387-4c01-9710-9b2f44c10329" height="100px" alt="Tauri"/>
    </a>
    <a href="https://vitejs.dev/">
        <img src = "https://user-images.githubusercontent.com/31413093/197097625-5b3bd3cf-2bd6-4a3a-8059-a1fe9f28100b.svg" height="100px" alt="Vite"/>
    </a>
</div

