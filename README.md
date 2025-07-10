[![CI Pipeline](https://github.com/cdk/cdk.github.io/actions/workflows/ci.yaml/badge.svg)](https://github.com/cdk/cdk.github.io/actions/workflows/ci.yaml)
[![Deploy to GitHub Pages](https://github.com/cdk/cdk.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/cdk/cdk.github.io/actions/workflows/deploy.yaml)

# Readme

### Install instructions

#### Install all the project dependencies
```>$ npm clean-install```

#### Create a 'dist/'
```>$ npm run dev```

#### Run a local development server with browser syncing
```>$ npm run watch ```

#### Build the code (outputs to 'dist/')  - Production (Uglify, minimise the code and the images)
```>$ npm run production ```

To test the website it needs to be run on a HTTP server a quick way of doing this is with python is:

```
$ python -m SimpleHTTPServer 8000
```

This makes the website available on `http://localhost:8000`.

### Deployment to GitHub Pages

> [!NOTE]
> The default branch of this repository is `source`.
> The branch `source` is used when building the website for deployment to GitHub pages.

Deployment to GitHub Pages can be

1. manually run from [this Actions tab](https://github.com/cdk/cdk.github.io/actions/workflows/pages/pages-build-deployment) and
2. runs automatically when a tagged [release](https://github.com/cdk/cdk.github.io/releases) is created on GitHub