To view this site, just click [here](https://github.com/gerhean/gerhean_hugo_site) (Not working)


To contribute to the source code or documentation, you should fork the GitHub project and clone it to your local machine.

# [Quick Start](https://gohugo.io/getting-started/quick-start/)

## Step 1: Install Hugo

Homebrew and MacPorts, package managers for macOS, can be installed from 
[brew.sh](https://brew.sh/) or [macports.org](https://www.macports.org/) 
respectively. See [install](https://gohugo.io/getting-started/installing) 
if you are running Windows etc.

```
brew install hugo
# or
port install hugo
```

To verify your new install:
```
hugo version
```


## Step 2: Start the Hugo server

Now, start the Hugo server with [drafts](https://gohugo.io/getting-started/usage/#draft-future-and-expired-content) enabled:
```
hugo server -D
```

Navigate to your new site at [http://localhost:1313/](http://localhost:1313/).


## Step 3: Build static pages

It is simple. Just call:
```
hugo -D
```
Output will be in `./public/` directory by default (`-d`/`--destination` flag to change it, or set `publishdir` in the config file).
