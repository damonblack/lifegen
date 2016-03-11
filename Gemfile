source 'https://rubygems.org'
ruby "2.2.4"
gem 'rails', '4.2.5'
gem 'pg', '~> 0.15'

gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'therubyracer', platforms: :ruby
gem "react_on_rails", "~> 3"

gem 'turbolinks'
gem 'jbuilder', '~> 2.0'
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'spring'
  # Call 'binding.pry' in ruby code.
  gem "pry"
  gem "pry-doc"
  gem "pry-rails"
  gem "pry-stack_explorer"
  gem "pry-rescue"
  gem "pry-byebug"

  # Color console output
  gem "rainbow"
  # Better console output
  gem "awesome_print"
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

# require: false is necessary for the linters as we only want them loaded
# when used by the linting rake tasks.
group :development do
  gem("rubocop", require: false)
  gem("ruby-lint", require: false)
  gem("scss_lint", require: false)
end
