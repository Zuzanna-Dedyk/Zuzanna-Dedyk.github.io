source "https://rubygems.org"

# The "github-pages" gem bundles the exact same Jekyll version and
# plugin versions that GitHub itself uses to build your live site.
# Using it locally means: "if it builds on my computer, it will build
# on GitHub too" — no surprises.

source "https://rubygems.org"

gem "github-pages", "~> 232", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed", "~> 0.17"  # Explicitly pin a version
end

# The following is only needed on Windows/JRuby machines.
# It is harmless to leave in even if you're on Mac or Linux.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
