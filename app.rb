ENV["RACK_ENV"] ||= "development"

require 'sinatra/base'
require_relative './data_mapper_setup.rb'

class Api < Sinatra::Base
  get '/' do
    'Hello Thermostat!'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
