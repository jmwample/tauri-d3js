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

- [Tauri](https://tauri.app/)
- [Vite](https://vitejs.dev/)
- React
- TypeScript
- Tailwind CSS
- Multiple eslint & prettier plugins installed
- D3js

**TODO**:
- [ ] Try migrating to the tauri-v2 build. [guide](https://v2.tauri.app/start/migrate/from-tauri-1/)
- [ ] Check through the `npm outdated` packages
- [ ] Get D3js example working
- [ ] Do some async work in rust!

## Install Dependencies

> This project uses [pnpm](https://pnpm.io/) as its package manager. To install dependecies:

```sh
$ sudo apt-get install libglib2.0-dev libgtk-3-dev libsoup2.4
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

## License

Dual licensing under both MIT and Apache-2.0 is the currently accepted standard by the Rust language
community and has been used for both the compiler and many public libraries since (see
[Why dual MIT/ASL2license?](https://doc.rust-lang.org/1.6.0/complement-project-faq.html#why-dual-mitasl2-license)).
In order to match the community standards, ptrs is using the dual MIT+Apache-2.0 license.


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

This project is based on [template-tauri-vite-react-ts-tailwind](https://github.com/RoyRao2333/template-tauri-vite-react-ts-tailwind).
