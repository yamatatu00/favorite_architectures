class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  http_basic_authenticate_with :name => ENV["BASIC_AUTH_NAME"], :password => ENV["BASIC_AUTH_PW"] if Rails.env.production?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
