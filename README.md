# markmonteiro.info

[![Build Status](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io.svg)](https://travis-ci.org/mark-monteiro/mark-monteiro.github.io) [![Code Climate](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io/badges/gpa.svg)](https://codeclimate.com/github/mark-monteiro/mark-monteiro.github.io)

My personal website. Hosted on Github Pages, which uses the Jekyll static website framework.

#Running Locally

##Dependencies
- Ruby
- Rubygems
- NodeJS

##Install
```
bundle install
```

##Serve
```
jekyll serve
```

## Run Html-Proofer
If running on Windows you need to install curb with libcurl:

1. [Download libcurl](https://curl.haxx.se/download.html)
2. Extract to `C:/curl` (or wherever)
3. Run the command below to install the curb gem:

   ```
   gem install curb -- with-curl-lib="C:/curl/lib64" --with-curl-include="C:/curl/include" --with-curl-dir="C:/curl/"
   ```
4. Copy all files from `C:/curl/bin` to your ruby bin folder (ex: `C:/Ruby200/bin`)
5. Set the following environment variables to get SSL certification to work (the files must be downloaded/generated first):

    ```
    CURL_CA_BUNDLE=C:\Ruby200\bin\ca-bundle.crt
    SSL_CERT_FILE=C:\Ruby200\bin\cacert.pem
    ```

Then, to run html proofer:
```
htmlproofer ./_site
```